console.log("----------------promiseAll----------------------");
const assert = require("assert");
const { resolve } = require("path");

const promiseAll = (proms) =>
  new Promise((res, rej) => {
    const results = [];
    let cnt = 0;
    proms.forEach((prom, i) =>
      prom
        .then((v) => {
          results[i] = v;
          cnt++;
          if (cnt === proms.length) {
            res(results);
          }
        })
        .catch(rej)
    );
    if (proms.length === 0) {
      res([]);
    }
  });

const randTime = (value) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * Math.random(), value));

// Promise.all([randTime(1), randTime(2), randTime(3)])
//   .then((arr) => {
//     console.table(arr);
//     assert.deepStrictEqual(arr, [1, 2, 3]);
//   })
//   .catch(console.error);

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, [1, 2, 3]);
  })
  .catch(console.error);

// Promise.all([randTime(11), Promise.reject("RRR"), randTime(33)])
//   .then((array) => {
//     console.log("여긴 과연 호출될까?!");
//   })
//   .catch((error) => {
//     console.log("reject!!!!!!>>", error);
//   });
promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });

console.log("----------------promiseSetteld----------------------");

const allSettledResults = [
  {
    status: "fulfilled",
    value: 11,
  },
  {
    status: "rejected",
    reason: "RRR",
  },
  {
    status: "fulfilled",
    value: 33,
  },
];

const promiseAllSettled = (proms) =>
  new Promise((res) => {
    const results = [];
    let cnt = 0;
    proms.forEach((prom, i) => {
      prom
        .then((v) => {
          results[i] = { status: "fulfilled", value: v };
          cnt++;
          if (cnt === proms.length) res(results);
        })
        .catch((err) => {
          results[i] = { status: "rejected", reason: err };
          cnt++;
          if (cnt === proms.length) res(results);
        });
    });
  });

promiseAllSettled([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.table(array);
    // console.log(JSON.stringify(array, null, '  '));
    console.log("여긴 과연 호출될까?!");
    assert.deepStrictEqual(array, allSettledResults);
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
