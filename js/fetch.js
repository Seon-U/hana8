const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";

//const fetch = new Promise((res, rej) => ...);
// const response = fetch(sampleUrl)
//   .then((res) => res.json())
//   .then((res) => console.log("%%%>>", res));
// console.log(response);

// const r1 = await fetch(sampleUrl);
// const rrr = await r1.json();
// console.log(rrr, r1);

console.log("------------------randTime--------------------");

const randTime = (val) =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000 * Math.random(), val);
  });

randTime(100).then((res) => console.log(res, new Date()));

//인터럽 순서 알수 없음. 순서없이 옴, 프로미스 특징
[1, 2, 3, 4, 5].forEach((a) =>
  randTime(a).then((res) => console.log(res, new Date()))
);
