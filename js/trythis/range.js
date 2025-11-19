const assert = require("assert");

// * rules f(s, e, step)
//  - step 기본값 = s > e ? -1 : 1
//  - step === 0 || s === e ? [s] 반환
// - 비정상(예외)
//     ⇒ s > e && step > 0 ? []
//     ⇒ s < e && setp < 0 ? []
//     즉, (s - e) * step > 0
//  - e 가 없다면,
//   ⇒ s > 0 ? e = s, s = 1
//   ⇒ s < 0 ? e = -1
//   ⇒ s === 0 ? [0]

//1차 - 지저분
// function range(startVal, lastVal, step) {
//   if (lastVal === undefined) {
//     if (startVal === 0) return [0];
//     if (startVal > 0) {
//       lastVal = 1;
//       [lastVal, startVal] = [startVal, lastVal];
//     } else {
//       lastVal = -1;
//     }
//   }
//   const diff = lastVal - startVal;
//   if (step === undefined) step = diff > 0 ? 1 : -1;
//   if (diff * step < 0) return [];
//   if (diff * step === 0) return [startVal];
//   const ret = [];
//   const cnt = diff / step;
//   for (let idx = 0; idx <= cnt; idx++) {
//     ret.push(startVal + step * idx);
//   }
//   return ret;
// }
const range = (s, e, step = s > e ? -1 : 1) => {
  console.log("range>>", s, e, step);
  if (s === e || step === 0) return [s];
  if ((s - e) * step > 0) return [];
  // if (e === undefined) {
  //   if (s > 0) {
  //     // if s = 5
  //     e = s;
  //     s = 1;
  //   } else if (s < 0) {
  //     e = -1;
  //   } else {
  //     [0];
  //   }
  // }

  const tmps = s;
  e = e ?? (s > 0 ? ((s = 1), tmps) : s === 0 ? 0 : -1);

  const rets = [];
  const i = s;
  // while (true) {
  //   // while (rets.length < 1000) {
  //   //5 4 3 2 1
  //   if (s > e && i < e) break; //5 4 3 2 1
  //   if (s < e && i > e) break; //1 2 3 4 5

  //   rets.push(i);
  //   i += step;
  // }
  for (let i = s; s > e ? i >= e : i <= e; i += step) {
    rets.push(i);
  }

  return rets;
};

// function range(startVal, lastVal, step) {
//   if (lastVal === undefined && startVal > 0)
//     [startVal, lastVal] = [1, startVal];

//   lastVal = lastVal ?? (startVal === 0 ? 0 : -1);
//   step = step ?? (lastVal - startVal >= 0 ? 1 : -1);

//   if (step === 0) return [startVal];
//   if ((lastVal - startVal) * step < 0) return [];
//   return Array.from(
//     { length: Math.abs((lastVal - startVal) / step) + 1 },
//     (a, i) => startVal + step * i
//   );
// }

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
