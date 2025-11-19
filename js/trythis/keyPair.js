const assert = require("assert");
const { isDeepStrictEqual } = require("util");

// c출신이면 이중루프 100%돌림

// O(n^2)이면 fail
//map 안쓰는 풀이로 다시 풀기
// function keyPair(arr, val) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = arr.length; j > i; j--) {
//       if (arr[i] + arr[j] === val) return [i, j];
//     }
//   }
// }

const keyPairOn2 = (arr, sum) => {
  // const myPairIdx = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return [i, j];
    }
  }
};

const keyPair = (arr, sum) => {
  //객체 키 해싱  x: 1, y: 2
  const myPairIdx = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const pairIdx = myPairIdx[val];
    if (pairIdx) return [pairIdx, i];
    myPairIdx[sum - val] = i;
  }
};

// function keyPair(arr, val) {
//   const map = new Map();
//   for (let i = 0; i <= arr.length; i++) {
//     if (map.has(arr[i])) return [map.get(arr[i]), i];
//     map.set(val - arr[i], i);
//   }
// }

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]); // [1,5]
x = keyPair([1, 2, 3, 4, 5, 7], 9);
assert.ok(
  isDeepStrictEqual(x, [3, 4]) || isDeepStrictEqual(x, [1, 5]),
  "failed"
);
