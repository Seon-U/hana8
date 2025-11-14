//과제
//소수점이 큰쪽으로 맞추는 것
//ㅈㅅ ... 귀찮았어요...
function addPoints(num1, num2) {
  const DIGIT = Math.max(
    num1.toString().split(".")[1]?.length ?? 0,
    num2.toString().split(".")[1]?.length ?? 0
  );

  return Number((num1 + num2).toFixed(DIGIT));
}

console.log(addPoints(0.21354, 0.1));
console.log(addPoints(0.14, 0.28)); // 0.42
console.log(addPoints(0.34, 0.226)); // 0.566
console.log(addPoints(10.34, 200.226)); // 210.566
console.log(addPoints(0.143, -10.28)); // -10.137
console.log(addPoints(0.143, -10));

console.log(addPointsLecture(0.21354, 0.1));
console.log(addPointsLecture(0.14, 0.28)); // 0.42
console.log(addPointsLecture(0.34, 0.226)); // 0.566
console.log(addPointsLecture(10.34, 200.226)); // 210.566
console.log(addPointsLecture(0.143, -10.28)); // -10.137
console.log(addPointsLecture(0.143, -10));

function addPointsLecture(a, b) {
  const alen = plen(a);
  const blen = plen(b);
  // const ret = alen > blen ? (a + b).toFixed(alen) : (a + b).toFixed(alen);
  // const ret = (a + b).toFixed(alen > blen ? alen : blen);
  const ret = (a + b).toFixed(Math.max(alen, blen));
  console.log(a, b, "=>", ret);
}

function plen(num) {
  // if (num === undefined || num === null) return 0;
  if (!num) return 0;
  return num.toString().length - Math.trunc(num).toString().length - 1;
}

// console.log(addPointsNoFix(0.21354, 0.1));
// console.log(addPointsNoFix(0.14, 0.28)); // 0.42
// console.log(addPointsNoFix(0.34, 0.226)); // 0.566
// console.log(addPointsNoFix(10.34, 200.226)); // 210.566
// console.log(addPointsNoFix(0.143, -10.28)); // -10.137
// console.log(addPointsNoFix(0.143, -10));

// function addPointsNoFix() {}
console.log(
  "------소수 배열의 평균을 소수점 두번째 자리까지 구하시오----------------------"
);
const N = 100000;

avg([
  10.34232323,
  15,
  "xxx",
  5.67899,
  null,
  20.9,
  1.005121,
  0,
  15.234,
  undefined,
  0.5,
]);

function avg(prices) {
  let cnt = 0;
  let sum = 0;

  for (const price of prices) {
    if (price === null || isNaN(price)) continue;
    sum += price * N * 100;
    cnt++;
  }
  const ret = Math.trunc(sum / cnt / N) / 100;
  console.log("🚀 ~ avg ~ ret:", ret);
}
