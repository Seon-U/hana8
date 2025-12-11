console.log("----------------promiseAll----------------------");
const assert = require("assert");

// const randTime = (value) =>
//   new Promise((resolve) => setTimeout(resolve, 1000 * Math.random(), value));

const randTime = (sec) =>
  new Promise((resolve, reject) => {
    console.log("randTime: sec", sec);
    setTimeout(resolve, sec * 1000 * Math.random(), sec);
  });

Promise.all([randTime(1), randTime(2), randTime(3)])
  .then((orgArr) => {
    console.log("orgArr", orgArr);
    promiseAll([randTime(1), randTime(2), randTime(3)])
      .then((arr) => {
        console.log("then started");
        console.table(arr);
        assert.deepStrictEqual(arr, orgArr);
      })
      .catch(console.error);
  })
  .catch(console.error);

const promiseAll = (parr) =>
  new Promise((resolve, reject) => {
    const results = [];
    let runCnt = 0;
    for (let i = 0; i < parr.length; i++) {
      parr[i]
        .then((res) => {
          results[i] = res;
          if (runCnt++ === parr.length) resolve(results);
        })
        .catch(reject);
    }
  });

const promiseAllMy = (proms) =>
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
    value: 1,
  },
  {
    status: "rejected",
    reason: "RRR",
  },
  {
    status: "fulfilled",
    value: 3,
  },
];

const promiseAllSettled = (parr) =>
  new Promise((resolve, reject) => {
    const results = [];
    let runCnt = 0;
    for (let i = 0; i < parr.length; i++) {
      parr[i]
        .then((value) => {
          results[i] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[i] = { status: "rejected", reason };
        })
        .finally(() => {
          if (++runCnt === parr.length) resolve(results);
        });
    }
  });
const promiseAllSettledMy = (proms) =>
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

Promise.allSettled([randTime(1), Promise.reject("RRR"), randTime(3)]).then(
  (parr) => {
    console.log(parr);
    promiseAllSettled([randTime(1), Promise.reject("RRR"), randTime(3)])
      .then((array) => {
        console.table(array);
        // console.log(JSON.stringify(array, null, '  '));
        console.log("여긴 과연 호출될까?!11");
        assert.deepStrictEqual(array, parr);
      })
      .catch((error) => {
        console.log("여긴 과연 호출될까?!22");
        console.log("reject!!!!!!>>", error);
      });
  }
);

console.log("----------------Promise - await ----------------------");

// new Promise((resolve) => randTime().then(resolve));
async function f() {
  const r1 = await randTime(1);
  console.log("🚀 ~ f ~ r1:", r1);
  return r1;
}

function f2() {
  return new Promise((resolve) =>
    randTime(1).then((r2) => {
      console.log("r2", r2);
      resolve(r2);
    })
  );
}

f();
f2();

const myFetch = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const myFetch2 = async (url) => fetch(url).then((res) => res.json());

console.log("--------------iter - async------------------------");

function iter(vals) {
  let i = -1;
  return {
    async next() {
      i += 1;
      return { value: randTime(vals[i]), done: i >= 3 };
    },
  };
}

(async () => {
  const it = iter([1, 2, 3]);
  console.time("iter");
  const { value } = await it.next();
  console.log("val", await value);
  console.log("1=", (await it.next()).value);

  // console.log("2=", await it.next());
  // console.log("3=", await it.next());
  // console.log("4=", await it.next());
  console.timeEnd("iter");
})();
