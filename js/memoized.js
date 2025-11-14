const assert = require("assert");

const memoizedTable = {};
// {2: 2, 3: 6, 4: 24}
let runCnt = 0;
function factorial(n) {
  runCnt++;
  if (n === 1) return 1;
  return memoizedTable[n] ?? (memoizedTable[n] = n * factorial(n - 1));
}

console.log(factorial(3), runCnt);
runCnt = 0;
console.log(factorial(5), runCnt);
runCnt = 0;
console.log(factorial(12), runCnt);

console.log("-------------------------------------------------------");

function memoized(fn) {
  const cache = {};
  return (k) => cache[k] ?? (cache[k] = fn(k));
}

// function facto(k) {
//   return k;
// }
const memoizedFactorial = memoized((k) => {
  runCnt++;
  if (k === 1) return 1;
  return k * memoizedFactorial(k - 1);
});

console.log(memoizedFactorial(3), runCnt);
runCnt = 0;
console.log(memoizedFactorial(5), runCnt);
runCnt = 0;
console.log(memoizedFactorial(12), runCnt);

assert.strictEqual(memoizedFactorial(10), 3628800);
console.log("-------------------------------------------------------");

//피보나치 - 루프

//피보나치 - 재귀

//피보나치 - 메모
function piboMemo() {
  const memoTable = [0, 1, 1];
  return function fibo(n) {
    runCnt++;
    return memoTable[n] ?? (memoTable[n] = fibo(n - 1) + fibo(n - 2));
  };
}
// runCnt = 0;
const piboMemoI = piboMemo();
// console.log("🚀 ~ piboMemo ~ piboMemo:", piboMemoI(5), runCnt);

// runCnt = 0;
// console.log("🚀 ~ piboMemo ~ piboMemo:", piboMemoI(5), runCnt);

// runCnt = 0;
// console.log("🚀 ~ piboMemo ~ piboMemo:", piboMemoI(7), runCnt);

// runCnt = 0;
// console.log("🚀 ~ piboMemo ~ piboMemo:", piboMemoI(30), runCnt);

console.log("-----------------------------------------------");

// assert.equal(loopFibonacci(5), 5);
// assert.equal(loopFibonacci(7), 13);
// assert.equal(loopFibonacci(30), 832040);

// assert.equal(recurFibonacci(5), 5);
// assert.equal(recurFibonacci(7), 13);
// assert.equal(recurFibonacci(30), 832040);

function loopFibonacci(n) {
  const seqs = [0, 1];
  for (let i = 2; i <= n; i++) {
    seqs.push(seqs[i - 2] + seqs[i - 1]);
  }
  return seqs[n];
}

function recurFibonacci(n) {
  if (n <= 1) return n;
  return recurFibonacci(n - 2) + recurFibonacci(n - 1);
}

function memoizedFn(fn) {
  const cache = [];
  return function MEMO(n) {
    return cache[n] ?? (cache[n] = fn(n));
  };
}

const memoFibonacci = memoizedFn(function memo(n) {
  if (n <= 1) return n;
  return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});

function runFn(fn) {
  console.time(fn.name || "memoFibonacci");
  for (let i = 10; i < 30; i += 10) {
    fn(i);
  }
  console.timeEnd(fn.name);
}

runFn(loopFibonacci);
runFn(recurFibonacci);
runFn(memoFibonacci);
runFn(piboMemoI);

// assert.equal(memoFibonacci(5), 5);
// assert.equal(memoFibonacci(7), 13);
// assert.equal(memoFibonacci(30), 832040);

// console.time("loopFibo");
// loopFibonacci(10);
// loopFibonacci(50);
// loopFibonacci(100);
// console.timeEnd("loopFibo");

// console.time("memoFibonacci");
// memoFibonacci(10);
// memoFibonacci(50);
// memoFibonacci(100);
// console.timeEnd("memoFibonacci");
