import assert from "assert";

console.log("------------------1------------------");
const isStringNumber = (value: unknown): value is [string, number] => {
  if (!Array.isArray(value)) return false;
  if (value.length !== 2) return false;
  if (typeof value[0] === "string" && typeof value[1] === "number") return true;

  return false;
  // Array.isArray(value) && value.length === 2 && => 한줄가능
};

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

f1(["item", 1000]);

console.log("------------------1-1--------------------");
type Animal = {};
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}

class Navi implements Cat {
  punch() {
    console.log("kukuki");
  }
}

class Retriever implements Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function isDog(a: Animal): a is Dog {
  return !!a && typeof a === "object" && "name" in a && !("punch" in a);
  if (!("name" in a)) return false;
  if (typeof a.name === "string") return true;
  return false;
}

const r = new Retriever("waldo");
const c = new Navi();
console.log("waldo", isDog(r));
console.log("navi", isDog(c));

console.log("----------------2----------------------");
// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;
const t: T2 = "X";
console.log("🚀 ~ t:", t);

console.log("----------------2-2----------------------");
// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];
const t4: T4 = 1;
console.log("🚀 ~ t4:", t4);

console.log("----------------3----------------------");

const hasMessageError = (error: unknown): error is Error =>
  error instanceof Error ||
  (error !== null &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string");

const messageError = (error: unknown) =>
  hasMessageError(error) ? error.message : JSON.stringify(error);

try {
  // throw new Error("some error!!!!"); // 가
  // throw "some string error!!!"; // 나
  throw ["some", "array", "error"]; // 다
} catch (error) {
  console.log(messageError(error));
  // if (hasMessageError(error)) console.log(error.message);
  // if (typeof error === "string") error = Error(error);
  // if (Array.isArray(error)) error = Error(error.join(" "));
  // if (error instanceof Error) console.log(error.message); // (라)
}

console.log("----------------4----------------------");
// import { assert } from 'assert';

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

type TUser = (typeof users)[number];

// 조건이 장황한 것보다 2번 현재 코드가 더 잘보일 것
const deleteArray = <T>(
  array: number[] | T[],
  startOrKey: number | keyof T,
  endOrValue: number | T[keyof T] = array.length
) =>
  array.filter(
    typeof startOrKey === "number" && typeof endOrValue === "number"
      ? (_, i) =>
          i < Math.min(startOrKey, endOrValue as number) ||
          i >= Math.max(startOrKey, endOrValue as number)
      : (a) =>
          typeof a !== "number" &&
          typeof startOrKey !== "number" &&
          a[startOrKey] !== endOrValue
  );

const deleteArray2 = (
  array: number[] | TUser[],
  startOrKey: number | keyof TUser,
  endOrValue: number | TUser[keyof TUser] = array.length
) =>
  array.filter(
    typeof startOrKey === "number"
      ? (_, i) =>
          i < Math.min(startOrKey, endOrValue as number) ||
          i >= Math.max(startOrKey, endOrValue as number)
      : (a) => typeof a !== "number" && a[startOrKey] !== endOrValue
  );

const arr = [1, 2, 3, 4];
console.log(deleteArray2(arr, 5));
console.log(deleteArray(["a", "b", "c"], 1, 2));
// console.log("kkkkk", deleteArray(arr, 4, "id"));
// console.log("kkkkk", deleteArray(arr, 4, "id"));
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr); // [1, 2, 3, 4]

console.log(deleteArray(users, 2)); // [Hong, Kim]
console.log(deleteArray(users, 1, 2)); // [Hong, Lee]
console.log(deleteArray(users, "id", 2)); // [Hong, Lee]
console.log(deleteArray(users, "name", "Lee")); // [Hong, Kim]

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
// assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
// assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
