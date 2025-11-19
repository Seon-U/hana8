// 다음과 같은 deleteArray를 순수 함수로 작성하시오.
const assert = require("assert");
// function deleteArray(arr, idx, last) {
//   // arr에 영향이 안가는 방식
//   if (typeof idx === "string" || typeof idx === "symbol") {
//     const ret = [];
//     for (item of arr) {
//       if (item[idx] !== last) ret.push(item);
//     }
//     return ret;
//   }
//   if (!last) return arr.slice(0, idx);
//   return [...arr.slice(0, idx), ...arr.slice(last)];
// }

// const deleteArray = (array, startOrKey, endOrValue) =>
//   array.filter(
//     typeof startOrKey === "number"
//       ? (_, i) => i < startOrKey || i >= endOrValue
//       : (a) => a[startOrKey] !== endOrValue
//   );

const deleteArray = (array, startOrKey, endOrValue = array.length) =>
  array.filter(
    typeof startOrKey === "number"
      ? (_, i) =>
          i < Math.min(startOrKey, endOrValue) ||
          i >= Math.max(startOrKey, endOrValue)
      : (a) => a[startOrKey] !== endOrValue
  );

//   if (typeof startOrKey === "number") {
//     return array.filter((_, i) => i < startOrKey || i >= endOrValue);
//   }
//   return array.filter((a) => a[startOrKey] !== endOrValue);
// };

const arr = [1, 2, 3, 4];
console.log(arr, deleteArray(arr, 1, 3));
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]); // 2부터 끝까지 지우고 나머지 리턴
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]); // 1부터 3미만까지 지우고 나머지 리턴
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);

assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);
