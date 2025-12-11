console.log("----------------1----------------------");

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

// type User = {
//   id?: number;
//   age?: number;
//   name: string;
// }

type EXT<T> = { [k in keyof T]: T[k] };
// type PartialRequired<T, K extends keyof T> = Partial<Omit<T, K>> &
//   Required<{ [k in K]: T[K] }>;

// type PartialRequired<T, R extends keyof T> = Required<Pick<Partial<T>, R>>;
// type PartialRequired<T, R extends keyof T> = Partial<T> & Required<Pick<T, R>>;
type PartialRequired<T, R extends keyof T> = {
  [k in keyof T as k extends R ? never : k]?: T[k];
} & {
  [k in keyof T as k extends R ? k : never]-?: T[k];
};

type User = PartialRequired<IUser, "name">; // name만 required

// let missName: User = {}; // Error! (: name is required)
let nameOnly: User = { name: "Hong" }; // OK
let nameWithId: User = { name: "Hong", id: 2 }; // OK
// let nameWithExtra: User = { name: "Hong", idd: 2 }; // Fail(idd is not exists)
// console.log("🚀 ~", missName, nameOnly, nameWithId, nameWithExtra);

type test2 = EXT<User>;

// type CombineExclude<T, U, E extends keyof (T & U)> = {
//   [k in keyof (T & U) as k extends E ? never : k]: k extends keyof T
//     ? k extends keyof U
//       ? T[k] | U[k]
//       : T[k]
//     : k extends keyof U
//       ? U[k]
//       : never;
// };

type CombineExclude<T, U, E> = {
  [k in keyof (T & U) as k extends E ? never : k]: k extends keyof T & keyof U
    ? T[k] | U[k]
    : (T & U)[k];
};

type ICombineExclude = CombineExclude<IUser, IDept, "name" | "dname">;

const combineExclude: ICombineExclude = {
  id: 0,
  age: 33,
  captain: "ccc",
};

console.log("----------------2----------------------");
// regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

//--ComponentProps<Component>
type RegistUserObj = Parameters<typeof registUserObj>[number];

type ComponentProps<F extends (...args: any) => void> = F extends (
  ...args: infer ARGS
) => void
  ? ARGS[0]
  : never;

const paramObj: RegistUserObj = { name: "Hong", age: 32 };
const newUser2 = registUserObj(paramObj);
console.log("🚀  newUser2:", newUser2);

console.log("----------------3----------------------");
// debounce와 throttle 함수를 TypeScript로 작성하시오.
// function debounce<T extends Array<any>>(
//   cb: (...args: T) => void,
//   delay: number
// ) {
//   let timer: ReturnType<typeof setTimeout> | null | number = null;
//   return (...args: T) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => cb(...args), delay, ...args);
//   };
// }
function debounce<T extends (...a: Parameters<T>) => {}>(cb: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
}

// function throttle<T extends Array<any>>(
//   cb: (...args: T) => void,
//   delay: number
// ) {
//   let timer: ReturnType<typeof setTimeout> | null = null;
//   return (...args: T) => {
//     if (timer) return;
//     timer = setTimeout(() => {
//       cb(...args);
//       timer = null;
//     }, delay);
//   };
// }

function throttle<T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number
) {
  //returntype 걸면 초기에는 초기 안줘도 에러 안남 - 지금 타입스크립트
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: T) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
}

// test
const debo = debounce((a: number, b: string) => console.log(a + 1, b), 1);
for (let i = 10; i < 15; i++) debo(i, "abc"); // 15, 'abc'

const thro = throttle((a: number) => console.log(a + 1), 1);
for (let i = 10; i < 15; i++) thro(i); // 11

console.log("--------------------------------------");

// JS 시간에 작성했던 memoized 함수를 범용성을 고려하여 TS로 작성하시오.
function memoized<T>(cb: (...args: T[]) => any) {
  const memoTable: Partial<Record<string, ReturnType<typeof cb>>> = {};
  return function (...args: T[]) {
    const key = JSON.stringify(args);
    if (memoTable[key]) return memoTable[key];
    memoTable[key] = cb(...args);
    return memoTable[key];
  };
}
// function memoized<V, T extends (...args: Parameters<T>) => V>(fn: T): V {
//   const cache: Record<string, V> = {};
//   return function (...args) {
//     const k = JSON.stringify(args); // f(1, 2) => `[1,2]` <===> [2,1]
//     // const k = args.toSorted().toString(); // f(1, 2) => `[1,2]` === [2,1]
//     return cache[k] ?? (cache[k] = fn(k));
//   };

// function memoized<P extends unknown[], R>(fn: (...args: P) => R) {
//   const cache: Record<string, R> = {};
//   return function (...args) {
//     const k = JSON.stringify(args); // f(1, 2) => `[1,2]` <===> [2,1]
//     // const k = args.toSorted().toString(); // f(1, 2) => `[1,2]` === [2,1]
//     return cache[k] ?? (cache[k] = fn(k));
//   };
// }

// test
const memoizeAdd = memoized((a: number, b: number) => {
  return a + b;
});

//재귀함수는 리턴타입을 걸어줘야 한다.
console.log(memoizeAdd(1, 2)); // 3
console.log(memoizeAdd(3, 4)); // 7

// const memoizeFactorial도 테스트(실행)) 해보세요!

const memoizeFactorial = memoized((n: number): number => {
  if (n <= 1) return 1;

  return n * memoizeFactorial(n - 1);
});

type k = (a: string | number | boolean) => string;

type t = (b: string) => string | number;

type p = k extends t ? true : false;
type y = t extends k ? true : false;

type l = string extends string | number ? true : false;
