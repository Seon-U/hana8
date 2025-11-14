const assert = require("assert");
const { type } = require("os");
// for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.      Object.keys() 처럼
// for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)  Object.values() 처럼

// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오. // Object.defineProperty
// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
const ProblemNumber = 0;

if (ProblemNumber === 1) {
  const arr = [100, 200, 300, 400, 500, 600, 700];

  function getArrKeys(arr) {
    for (key in arr) console.log(key);
  }

  function getArrValue(arr) {
    for (val of arr) console.log(val);
  }

  console.log("🚀 ~ getArrKeys:", getArrKeys);
  getArrKeys(arr);
  console.log("🚀 ~ getArrValue:", getArrValue);
  getArrValue(arr);
}

if (ProblemNumber === 2) {
  const obj = { name: "Kim", addr: "Seoul", level: 1, role: 9, receive: false };

  function getObjKeys(obj) {
    for (key in obj) console.log(key);
  }

  function getObjValsIn(obj) {
    for (key in obj) console.log(obj[key]);
  }

  function getObjValsOf(obj) {
    for ([, val] of Object.entries(obj)) console.log(val);
  }

  console.log("🚀 ~ getObjKeys:", getObjKeys);
  getObjKeys(obj);

  console.log("🚀 ~ getObjValsIn:", getObjValsIn);
  getObjValsIn(obj);

  console.log("🚀 ~ getObjVals:", getObjValsOf);
  getObjValsOf(obj);

  console.log(
    "=================================================================="
  );

  console.log(Object.getOwnPropertyDescriptors(obj));
  Object.defineProperty(obj, "level", { enumerable: false });
  console.log(Object.getOwnPropertyDescriptors(obj));
  console.log(obj.level);
  console.log(
    "=================================================================="
  );

  console.log(Object.getOwnPropertyDescriptors(obj));
  Object.defineProperty(obj, "role", { writable: false });
  console.log(Object.getOwnPropertyDescriptors(obj));

  console.log(
    "=================================================================="
  );
}

// const data = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

if (ProblemNumber === 3) {
  const data = [
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ];

  function makeObjectFromArray(arr) {
    const middleArr = [];
    for ([key, ...val] of arr) {
      middleArr.push([key, val]);
    }
    return Object.fromEntries(middleArr);
  }
  const newObj = makeObjectFromArray(data);
  // assert.deepStrictEqual(newObj, {
  //   A: [10, 20],
  //   B: [30, 40],
  //   C: [50, 60, 70],
  // });

  console.log("🚀 ~ newObj:", newObj);
}

if (ProblemNumber === 4) {
  const n = 9.23;
  Object.defineProperties(Number.prototype, {
    length: {
      get() {
        return this.toString().length;
      },
    },
    point: {
      get() {
        const plen =
          this.toString().length - Math.trunc(this).toString().length - 1;
        return +(this % 1).toFixed(plen);
      },
      // set(val) {
      //   console.log("🚀 ~ val:", val, +this.toFixed(val));
      //   +this.toFixed(val)
      // }
    },
  });
}

if (ProblemNumber === 5) {
  Object.defineProperty(Number.prototype, "setPoint", {
    value: function (value) {
      return Number(this.toFixed(value));
    },
  });

  // Object.defineProperties(Number.prototype, "setPoint", {
  //   value: function (value) {
  //     return Number(this.toFixed(value));
  //   },
  // });

  Number.prototype.setPoint2 = function (val) {
    return Number(this.toFixed(value));
  };

  console.log("nn>>", n.length);
  console.log("nn>>", n.point);
  console.log("n1>>", n.setPoint(1));
}

if (ProblemNumber === 6) {
  const data = [
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ];

  function makeObjectFromArray(arr) {
    const ret = {};
    for (const [k, ...v] of arr) {
      ret[k] = v;
    }
    return ret;
  }
  const newObj = makeObjectFromArray(data);
  assert.deepStrictEqual(newObj, {
    A: [10, 20],
    B: [30, 40],
    C: [50, 60, 70],
  });

  function makeArrayFromObject(obj) {
    const arr = [];
    for (const [k, v] of Object.entries(obj)) {
      arr.push([k, ...v]);
    }
    return arr;
  }

  const x2 = makeArrayFromObject(newObj);
  assert.deepStrictEqual(x2, data);
}

if (ProblemNumber === 0) {
  function shallowCopy(obj) {
    // return {...obj};
    // return Object.assign({}, obj);
    // const newObj = {};
    // for (key in obj) {
    //   newObj[key] = obj[key];
    // }
    // return newObj;
    const ret = {};
    for (const [k, v] of Object.entries(obj)) {
      ret[k] = v;
    }
    return ret;
  }
  function deepCopy(obj) {
    // const newObj = {};
    // for (key in obj) {
    //   while (typeof obj[key] === Object) {
    //     newObj[k] = shallowCopy(obj[key]);
    //   }
    // }
    // return newObj;
    if (obj === null || typeof obj !== "object") return obj;
    const ret = {};
    for (const [k, v] of Object.entries(obj)) {
      ret[k] = deepCopy(v);
    }
    return ret;
  }
  // 1) shallow copy
  const kim = {
    nid: 3,
    nm: "Kim",
    addr: { city: "Busan", road: "Haeundaero", zip: null },
  };

  const newKim1 = shallowCopy(kim); // cf. {...kim}
  newKim1.nid = 5;
  assert.notEqual(kim.nid, newKim1.nid);
  newKim1.addr.city = "Seoul";
  console.log(newKim1);
  assert.equal(kim.addr, newKim1.addr);

  // 2) 이하 deep copy
  const kim2 = {
    nid: 3,
    nm: "Kim",
    addr: {
      city: "Busan",
      road: "Haeundaero",
      zip: null,
      //처리고민하
      // [Symbol()]: new Map(),
    },
  };

  const newKim2 = deepCopy(kim2);
  console.log(JSON.stringify(newKim2, "           "));
  newKim2.addr.city = "Daegu";
  assert.notEqual(kim2.addr.city, newKim2.addr.city);
}
