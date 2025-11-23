// 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
// 21:23:34.99      y     m   d h m s   ms
const d1 = new Date(1970, 0, 1, 0, 0, 0, 0);
const d2 = new Date(1970, 0, 2);
console.log("~diff", (d2 - d1) / 1000);
console.log("~diff", (d2.getTime() - d1.getTime()) / 1000);

console.log((new Date(1970, 1, 2) - new Date(1970, 1, 1)) / 1000);

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 출력하시오.
const d3 = new Date();
d3.setMonth(d3.getMonth() + 1);
d3.setDate(0);
const lastday = d3.getDate(0);
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
// const dates = Array.from({ length: 5 }, (_) => rand(1, lastday));
// dates.sort().reverse();
console.log("🚀 ~ lastday:", lastday);

const dates = [];
do {
  const r = rand(1, lastday);
  if (!dates.includes(r)) dates.push(r);
} while (dates.length < 5);

dates.sort((a, b) => (a > b ? 1 : -1)).reverse();
console.log("🚀 ~ dates:", dates);

const ym = `${d3.getFullYear()}-${d3.getMonth() + 1}`;
dates.forEach((d) => {
  console.log(`${ym}-${d.toString().padStart(2, "0")}`);
});

//('00' + d).substing(d.length);

const arr = [];
for (let i = 0; i <= 5; i++) {
  arr[i] = Math.ceil(30 * Math.random());
}
console.log(arr.reverse());

// 내년(2026년) 오늘의 요일을 출력하시오.
//2026년 11월 20일
const d4 = new Date();
d4.setFullYear(d4.getFullYear() + 1);
const fmtWeek = new Intl.DateTimeFormat("ko-KR", {
  weekday: "long",
});

console.log("Next Year:", fmtWeek.format(d4));

const dtf = new Intl.DateTimeFormat("ko-KR");
console.log(
  new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toDateString()
);

console.log(
  ["일", "월", "화", "수", "목", "금", "토"][
    new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).getDay()
  ]
);

console.log(
  ["일", "월", "화", "수", "목", "금", "토"][new Date(2025, 10, 20).getDay()]
);

console.log(
  ["일", "월", "화", "수", "목", "금", "토"][new Date(2026, 10, 20).getDay()]
);

// 오늘로 부터 100일 후의 날짜는?
console.log(new Date(new Date().getTime() + 100 * 24 * 60 * 60 * 1000));

const fmtFull = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "long",
});
const d5 = new Date();
d5.setDate(d5.getDate() + 100);
console.log("After 100", fmtFull.format(d5));
