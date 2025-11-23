function f(cb, delay) {
  console.log("connecting...");
  setTimeout(cb);
  // cb();
}

//프로미스 이전 비동기 방식
function query(sql, cb) {
  try {
    console.log("run:", sql);
    // throw new Error("Error!");
    const result = [{ id: 1 }];
    cb(null, result);
  } catch (err) {
    cb(err);
  } finally {
    console.log("close!");
  }
}
const [r1, r2] = Promise.all([queryPromise('select1'), queryPromise('select2').then(console.log)]).then(({r1, r2}) => console.log(r1, r1))
// 관심있으면 짜보기
class Promise {
  #thenFns = [];
  #catchFns = [];
  #finallyFns = [];

  constructor(cb) {
    cb(this.resolve, this.reject);
  }
  resolve(ret) {
    let r = ret;
    for (const fn of this.#thenFns) {
      try {
        r = fn(ret);
      }
    }
    this.#thenFns.forEach(fn => fn(ret));
  }
  reject(err) {
    this.#catchFns(err);
  }
  then(cb) {
    this.#thenFns.push(cb);
  }
  catch(cb) {
    this.#catchFns.push(cb);
  }
}

function queryPromise(sql) {
  return new Promise((resolve, reject) => {
    try {
      console.log("run:", sql);
      const result = [{ id: 1 }];
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      console.log("close!");
    }
  });
}

const ff = (cb, delay) =>
  new Promise((resolve, reject) => {
    console.log("connecting...");
    // setTimeout(resolve, delay);
    // setTimeout(() => reject(new Error("RRR")), delay);
  });
//taskQ (노드 - 타이머큐)
console.log("--------------------------------------");

ff()
  .then(() => queryPromise("update User.."))
  .then((result) => console.log("results:", result))
  .then((result) => console.log("************"))
  .catch((err) => console.error(err.message))
  .finally(() => console.log("close!!"));

console.log("--------------------------------------");
//한참 뒤에 실행됨. 음식 시키고 기다리는 느낌, 비동기 장점 사라짐.
// const conn = await ff();
try {
  const result = queryPromise("upaaa....");
} catch (err) {
  console.log(err.message);
}

console.log("--------------------------------------33");
f(
  () =>
    query("select * from User", (err, res) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log("success:", res);
      query("update...", (err, res) => {
        //...
      });
    }),
  1000
);
console.log("------------------------");
f(() => {
  console.log("yyyyyyyyyyyyyyyy11");
}, 2000);
ff(1000)
  .then(() => {
    console.log("yyyyyyyyyyyy22");
    return 999;
  })
  .then(console.log)
  .catch(console.error);
console.log("------------------------");

//micro-task-queue 1순위
Promise.resolve().then(() => console.log("zzzzzzzz"));


