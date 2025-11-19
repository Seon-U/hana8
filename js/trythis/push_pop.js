const assert = require("assert");

const arr = [1, 2, 3, 4];

//내가 짬
// function push(arr, ...args) {
//   return [...arr, ...args];
// }

const push = (array, ...args) => [...array, ...args];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);

// function pop(arr, cnt) {
//   if (!cnt) return arr[arr.length - 1];
//   const ret = [];
//   while (cnt >= 1) {
//     ret.push(arr[arr.length - cnt--]);
//   }
//   return ret;
// }

const pop = (array, cnt = 1) => {
  if (cnt <= 0) return array;
  return cnt === 1 ? array.at(-1) : array.slice(-cnt);
};

assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!

// function unshift(arr, ...args) {
//   return [...args, ...arr];
// }

const unshift = (array, ...args) => [...args, ...array];

assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

//하지말란거 다 함.. 다음부터 그러지 맙시
// function shift(arr, cnt) {
//   if (!cnt) return [[arr[0]], [...arr.slice(1)]];
//   return [[...arr.slic당e(0, cnt)], [...arr.slice(cnt)]];
// }
//이거 견본으로 공부 다시하기

const shift = (array, cnt = 1) => [array.slice(0, cnt), array.slice(cnt)];
// const [removed, left] = shift(arr, 2);
// [ [shift되는 원소들], [남은 원소들] ]
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]);
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
return;
