//TODO: 이따 코드 보고 고치기
// * try this
// 매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
// (test 요령: 0.1초에 한 번씩 - setInterval - 실행하게 해놓고, 1초 후에 초기화)
// cf. function onceAgain(f, rebirthDelay = 1000) {}

const once = (f, rebirthDelay = 100) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    setTimeout(() => (done = false), rebirthDelay);
    return f(...args);
  };
};
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

// let cnt = 0;
// const intl = setInterval(() => {
//   cnt++;
//   console.log(cnt, fn(cnt, -cnt));
// }, 10);

// function once(fn) {
//   let cnt = 0;
//   return (...args) => {
//     if (cnt > 0) return;
//     console.log(cnt);
//     cnt++;
//     return fn(...args);
//   };
// }

console.log("---------------------------------------------------");

// function once(fn, n) {
//   let timer;
//   let first = true;
//   return (...args) => {
//     console.log("🚀 ~ once ~ first:", first);
//     if (!first) return;
//     first = false;
//     setTimeout(() => {
//       first = true;
//     }, n);
//     return fn(...args);
//   };
// }

// function fivePart(x, y) {
//   return `fivePart ${x}, ${y}, id: ${this.id}`;
// }
// const fn = once(fivePart.bind({ id: 11 }));
// console.log("11>>", fn(1, 2));
// console.log("12>>", fn(11, 22)); // never run

// const fn2 = once(fivePart);
// console.log(fn2.bind({ id: 22 })(3, 4));

// const fn3 = once(fivePart, 1000);
// setInterval(fn3, 100);

const before = () => console.log("before....");
const after = (result) => console.log("after...", result);

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) =>
  `${id}/${nickname}/${email}/${level}`;

const template =
  (f) =>
  (...args) => {
    before();
    // setImmediate(after);
    const ret = f(...args);
    setImmediate(after, ret);
    return ret;
    // after();
    // return ret;
  };

const temp = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행

console.log("temp1>>", temp("sico", "hello"));
console.log("temp2>>", temp2(1, "sico", "sico@gmail.com", 5));

console.log("---------------------------------------------");

const weeks = ["일", "월", "화", "수", "목", "금", "토"];
let widx = -1;

const getNextWeek = (() => {
  let widx = -1;
  return () => {
    widx += 1; // side-effect!
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
