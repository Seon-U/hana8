import assert from "assert";

const randTime = (sec: number): Promise<number> =>
  new Promise((resolve) => {
    // console.log('🚀 randTime:', sec);
    // setTimeout(resolve, sec * 1000 * Math.random(), sec);
    setTimeout(() => resolve(sec), sec * 1000 * Math.random());
  });

//T []
// const promiseAllSettled = <T extends Promise<any>[](
//   parr: [...T]
// ): Promise<
//   Partial<
//     Array<
//       { status: "fulfilled"; value: Awaited<T[number]> } | { status: "rejected"; reason: any }
//     >
//   >
// > =>
//   new Promise((resolve) => {
//     const results: Partial<
//       | Array<
//           | { status: "fulfilled"; value: Awaited<T[number]> }
//           | { status: "rejected"; reason: any }
//         >
//       | undefined
//       | null
//     > = [];
//     let runCnt = 0;
//     for (let i = 0; i < parr.length; i++) {
//       const promise = parr[i];
//       !!promise &&
//         promise
//           .then((value) => {
//             results[i] = { status: "fulfilled", value };
//           })
//           .catch((reason) => {
//             results[i] = { status: "rejected", reason };
//           })
//           .finally(() => {
//             if (++runCnt === parr.length) resolve(results);
//           });
//     }
//   });

type AllSettledResult<T> =
  | {
      status: "fulfilled";
      value: T;
    }
  | {
      status: "rejected";
      reason: unknown;
    };

const promiseAllSettled = <T>(
  parr: Promise<T>[]
): Promise<AllSettledResult<T>[]> =>
  new Promise((resolve) => {
    const results: AllSettledResult<T>[] = [];
    let runCnt = 0;
    for (let i = 0; i < parr.length; i++) {
      parr[i]!.then((value) => {
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

Promise.allSettled([randTime(1), Promise.reject("RRR"), randTime(3)]).then(
  (orgArr) => {
    console.log("orgArr>>", orgArr);
    promiseAllSettled([randTime(1), Promise.reject("RRR"), randTime(3)])
      .then((array) => {
        console.table(array);
        console.log("여긴 과연 호출될까?111!");
        assert.deepStrictEqual(array, orgArr);
      })
      .catch((error) => {
        console.log("allSettled-reject!!!!!!>>", error);
      });
  }
);

// const promiseAll = <T extends readonly Promise<any>[]>(
// 	parr: [...T],
// ): Promise<Awaited<T[number]>[]> =>
// 	new Promise((resolve, reject) => {
// 		const results: Awaited<T[number]>[] = [];
// 		let runCnt = 0;
// 		for (let i = 0; i < parr.length; i++) {
// 			const promise = parr[i];
// 			!!promise &&
// 				promise
// 					.then((res) => {
// 						results[i] = res;
// 						if (++runCnt === parr.length) resolve(results);
// 					})
// 					.catch(reject);
// 		}
// 	});

//promise catch error => any
const promiseAll = <T>(parr: Promise<T>[]): Promise<T[]> =>
  new Promise((resolve, reject) => {
    const results: T[] = [];
    let runCnt = 0;
    for (let i = 0; i < parr.length; i++) {
      parr[i]!.then((res) => {
        results[i] = res;
        if (++runCnt === parr.length) resolve(results);
      }).catch(reject);
    }
  });

const customPromises = [
  Promise.resolve("world"),
  Promise.resolve(100),
  Promise.resolve(false),
];

const customResult = promiseAll(customPromises);
const customResults = promiseAllSettled(customPromises);

// customResult 타입: Promise<Partial<(string | number | boolean)[]>>

Promise.all([randTime(1), randTime(2), randTime(3)]).then((orgArr) => {
  console.log("🚀 ~ orgArr:", orgArr);
  promiseAll([randTime(1), randTime(2), randTime(3)])
    .then((arr) => {
      console.table(arr);
      const x = arr[0];
      if (x?.status === "fufilled") console.log(x.value);
      assert.deepStrictEqual(arr, orgArr);
    })
    .catch(console.error);
});

Promise.all([randTime(2), Promise.reject("RRR"), randTime(2.5)])
  .then((orgArr) => {
    promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
      .then((array) => {
        console.log("여긴 과연 호출될까?!");
      })
      .catch((error) => {
        console.log("reject!!!!!!>>", error);
      });
  })
  .catch((err) => {
    console.log("orgCatch>>", err);
    assert.strictEqual(err, "RRR");
  });

// new Promise((resolve) => randTime().then(resolve))
async function f() {
  const r1 = await randTime(1);
  console.log("🚀 ~ r1:", r1);
  return r1;
}
function f2() {
  return new Promise((resolve) =>
    randTime(1).then((r2) => {
      console.log("🚀 ~ r2:", r2);
      resolve(r2);
    })
  );
}
f();
f2();

const myFetch = async (url: string) => {
  const res = await fetch(url);
  const rrr = await res.json();
  console.log("🚀 ~ rrr:", rrr);
  return rrr;
};

const myFetch2 = async (url: string) => fetch(url).then((res) => res.json());

function iter<T extends number[]>(vals: T) {
  let i = -1;
  return {
    next() {
      i += 1;
      return { value: randTime(vals[i]!), done: i >= 3 };
    },
  };
}

(async () => {
  const it = iter([1, 2, 3]);
  console.time("iter");
  const { value } = it.next();
  console.log("🚀 ~ value:", await value);
  // console.log('11=', await it.next().value);
  // console.log('2=', await it.next());
  // console.log('3=', await it.next());
  // console.log('4=', await it.next());
  console.timeEnd("iter");
})();
