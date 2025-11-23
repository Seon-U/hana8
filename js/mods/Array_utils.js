// const assert = require("assert");

// * rules f(s, e, step)

export const range = (s, e, step = s > e ? -1 : 1) => {
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
