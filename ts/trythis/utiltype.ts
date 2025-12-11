type User = {
  id: number;
  name: string;
  12: number;
};

// 1) 다음에서 key가 number 타입이면 key앞에 user_를 붙이세요.
// 1번 간혹가다 쓸 일있지만 그 외에는 쓸 일이 거의 없음 - 뒤에 템플릿 리터럴 타입 할 때 나옴
// getId: () => { } //getter 자동정의 용
// setId(val:v) => void

type UserNumKeyPrefix = {
  [k in keyof User as k extends number ? `user_${k}` : k]: User[k];
};
const u: UserNumKeyPrefix = {
  id: 1,
  name: "Hong",
  user_12: 100,
};
console.log(u);

// 2) 다음에서 key가 string 타입인 것만 남기세요.
type UserOnlyStrKey = {
  //
  // [k in keyof User as Extract<k, string>]: User[k];
  // [k in keyof User & string]: User[k];
  [k in keyof User as k extends string ? k : never]: User[k];
};

// 3) User에서 key가 string 타입인 것만 남기고 prefix(user_)를 붙이세요 (2가지)
type UserOnlyStrKeyPrefix = {
  [k in keyof User as k extends string ? `user_${k}` : never]: User[k];
};

console.log("-----------------2---------------------");

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
// type Change<T, K extends keyof T, U> = {
//   [p in keyof T]: p extends K ? U : T[p];
// };
type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};

type DeptCaptain = Change<IDept, "captain", IUser>;
type Err = Change<IDept, "xxx", IUser>; // 존재하지 않는 키는 Error!!!

console.log("----------------3----------------------");
type Item = { item: string; price: number };
type ItemPrice<T, U> = {
  // [k in keyof T]: T[k] extends string ? keyof U : T[k];
  // [k in keyof T]: k extends "item" ? keyof U : T[k];
  [k in keyof T]: k extends "item" ? keyof U : T[k];
  // [k in keyof T]: keyof U
};

const stock = { X: 1, Y: 2, Z: 30 };
type rr = keyof typeof stock;

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: "X", price: 1000 },
  { item: "Y", price: 2000 },
  { item: "Z", price: 3000 },
  { item: "P", price: 4000 }, // stock에 존재하지 않는 키는 Error!!!
];

//T[K] 가 의미하는 게 뭐야?
// 그 타입은 뭐다? string
//우리가 원하는 타입은

//

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);

console.log("----------------4----------------------");

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

// type Combine<T, U> = {
//   [k in keyof T | keyof U]: k extends keyof T & keyof U
//     ? U[k] | T[k]
//     : k extends keyof T
//       ? T[k]
//       : k extends keyof U
//         ? U[k]
//         : never;
// };
type Exp<T> = {
  [k in keyof T]: T[k];
};

// type Combine<T, U> = {
//   [k in keyof T | keyof U]: k extends keyof T
//     ? k extends keyof U
//       ? U[k] | T[k]
//       : T[k]
//     : k extends keyof U
//       ? U[k]
//       : never;
// };

//개쩐당
type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] : (T & U)[k];
};

type ICombined = Combine<IUser, IDept>;

const combineX: ICombined = {
  id: 0,
  age: 33,
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};
const combineY: ICombined = {
  id: 0,
  age: "33세",
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};

console.log("----------------infer----------------------");

function add(a: number, b: string, c: boolean) {
  return `${a} - ${b} + ${c}`;
}

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>;
// number | string | boolean
type K = typeof add;
// type K = (a: number, b: string, c: boolean) => string

type AX = Args<typeof String.prototype.endsWith>; // ⇒ string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>; // ⇒ number

// 타입을 무시하고 싶을 때, unknown보다는 void쓰기;
// type FirstArgs<F> = F extends (...args: infer args) => void ? args[0] : never;
// type FirstArgs<F extends Function> = F extends (...args: infer args) => void ? args[0] : never;

//콘트라베리언스 큰쪽에 작은 게 못감 - 너무 넓어지면 안됨; - 함수 파라미터일 때만
//any 신경안쓰겠다 써도 정답이 맞긴 함.
// type FirstArgs<F extends Function> = F extends (
//   a: infer First,
//   ...args: any[]
// ) => void
//   ? First
//   : never;

type FirstArgs<F extends Function> = F extends (...args: infer args) => void
  ? args[0]
  : never;

type test = FirstArgs<number>;

type SecondArgs<F> = F extends (...args: infer args) => void ? args[1] : never;

type Args<F> = F extends (...args: infer args) => void ? args[number] : never;

type tt = Args<typeof add>;
type t2 = FirstArgs<typeof add>;
type t3 = SecondArgs<typeof add>;

const a: A = 0;
const b: B = "abc";
const c: C = Math.random() > 0.5 ? 1 : "abc";
console.log("🚀 abc:", a, b, c);
