// number1 generator
// const readline = require("readline");
// const { stdin: input, stdout: output } = require("process");

// function* add() {
//   const x = yield "첫 번째 수는?";
//   const y = yield "두 번째 수는?";
//   return x + y;
// }

// const adder = add();

// const r1 = readline.createInterface({ input, output });

// function run({ value, done }) {
//   console.log(value, done);
//   if (done) {
//     console.log(`Total: ${value}`);
//     return r1.close();
//   }
//   r1.question(`${value} ->`, (answer) => {
//     if (isNaN(answer)) {
//       console.log("input the number only!!");
//       run({ value, done });
//     }
//     run(adder.next(+answer));
//   });
// }

// // const { value, done } = adder.next();
// run(adder.next());
// r1.on("line", (answer) => {
//   const { value, done } = adder.next(answer);
//   while (true) {
//     console.log(value);
//     if (done) {
//       console.log(`Total: ${value}`);
//       r1.close();
//       break;
//     }

//     if (isNaN(answer)) {
//     } else {
//       adder.next(+answer);
//     }
//   }
// });

// r1.on("close", () => {
//   process.exit();
// });

// const itAdd = add();
// console.log(itAdd.next());

// console.log(itAdd.next().value);
// console.log(itAdd.next(1).value);
// console.log(itAdd.next(2).value);

console.log(
  "-----------------------------------------------------------------------"
);

const LINE2 = [
  "신도림",
  "성수",
  "신설동",
  "용두",
  "신답",
  "용답",
  "시청",
  "충정로",
  "아현",
  "이대",
  "신촌",
  "공항철도",
  "홍대입구",
  "합정",
  "당산",
  "영등포구청",
  "문래",
  "대림",
  "구로디지털단지",
  "신대방",
  "신림",
  "봉천",
  "서울대입구",
  "낙성대",
  "사당",
  "방배",
  "서초",
  "교대",
  "강남",
  "역삼",
  "선릉",
  "삼성",
  "종합운동장",
  "신천",
  "잠실",
  "잠실나루",
  "강변",
  "구의",
  "건대입구",
  "뚝섬",
  "한양대",
  "왕십리",
  "상왕십리",
  "신당",
  "동대문역사문화공원",
  "을지로4가",
  "을지로3가",
  "을지로입구",
];

// class Subway {
//   constructor(start, last) {
//     //LINE2에서 start -> last경로까지의 배열 반환
//     const startIdx = LINE2.findIndex((v) => v === start);
//     const lastIdx = LINE2.findIndex((v) => v === last);
//     if (startIdx < lastIdx) LINE2.slice(startIdx, lastIdx);
//     [...LINE2.slice(startIdx), ...LINE2.slice(0, lastIdx + 1)];
//   }
// }

//iterator
// function* Subway(start, last) {
//   let isStart = false;
//   let notEnd = true;
//   while (notEnd) {
//     for (const i of LINE2) {
//       if (i === start) {
//         isStart = true;
//       }
//       if (isStart && i === last) {
//         yield i;
//         notEnd = false;
//         isStart = false;
//         break;
//       }
//       if (isStart) {
//         console.log(i);
//         yield i;
//       }
//     }
//   }
// const lastIdx = LINE2.findIndex((v) => v === last);
// if (startIdx < lastIdx) return LINE2.slice(startIdx, lastIdx + 1);
// return [...LINE2.slice(startIdx), ...LINE2.slice(0, lastIdx + 1)];
// }

//iterable
class Subway {
  #way;
  #index = 0;

  constructor(start, last) {
    const startIdx = LINE2.findIndex((v) => v === start);
    const lastIdx = LINE2.findIndex((v) => v === last);
    if (startIdx < lastIdx) this.#way = LINE2.slice(startIdx, lastIdx + 1);
    else this.#way = [...LINE2.slice(startIdx), ...LINE2.slice(0, lastIdx + 1)];
  }

  next() {
    return {
      value: this.#way[this.#index],
      done: this.#index === this.#way.length,
    };
  }

  [Symbol.iterator]() {
    return this.#way[Symbol.iterator]();
  }
}

const assert = require("assert");
const routes = new Subway("문래", "신림");
console.log([...routes]);

assert.deepStrictEqual(
  [...routes],
  ["문래", "대림", "구로디지털단지", "신대방", "신림"]
);

const it1 = routes[Symbol.iterator]();
["문래", "대림", "구로디지털단지", "신대방", "신림"].forEach((value, i) => {
  assert.deepStrictEqual(it1.next(), { value, done: false });
  console.log(i, routes.toString());
});
// // console.log(it1.next());
assert.deepStrictEqual(it1.next(), { value: undefined, done: true });

const routes2 = new Subway("구로디지털단지", "성수"); // 32개 정거장
routes2.next();
console.log(routes2); // '구로디지털단지역에서 성수까지 가는 열차이며, 현재 신대방역입니다'
console.log([...routes2]); // ['신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}

const route3 = new Subway("문래", "합정"); // 46개 정거장이면 통과!
assert.strictEqual([...route3].length, 46);
const route4 = new Subway("신도림", "을지로입구"); // 48개 정거장이면 통과!
assert.strictEqual([...route4].length, 48);
