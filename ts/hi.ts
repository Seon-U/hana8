const myName: string = "Kim";
console.log("🚀 ~ Hi~", myName);

type F = (input: string | number) => number;

const ff: F = (i: string | number) => {
  return +i * 100;
};
ff(1);

function f(cb: F) {
  // cb(1);
  cb("1");
}

type X = string | undefined;
type Y = string | number;
const y: Y = 1;

const f2 = (i: string | number | boolean) => +i + 1;
const f3 = (i: string | number) => +i + 1;
const f4 = (i: string) => +i + 1;

f(f2);
f(f3);

const arr = [1, 2, 3];
if (arr[1]) console.log(arr[0]?.toFixed(1), arr[1] + 100);

type OBJ = { [k: string | number]: number };
const o1: OBJ = { 1: 1, a: 2 };
const obj: { [x: string]: number } = { id: 1 };
const a = "idd";
console.log("🚀 ~ obj:", obj["id"] + 1);

console.log("--------------------------------------");

const someFunc = () => {
  try {
    throw new Error("some error!!!!");
    // throw 'some string error!!!';
    // throw ['some', 'array', 'error'];
  } catch (error) {
    console.log("error >>> ", error, typeof error);
    console.log(error.message);
  }
};
someFunc();
