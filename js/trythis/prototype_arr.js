const assert = require("assert");
// 모든 Array가 다음 기능을 갖도록 구현하세요.
// 1) mapBy(), findBy(), filterBy(), rejectBy(), sortBy()
// 2) firstObject, lastObject

const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: "Hing" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

// const mapBy = function (key) {
//   const ret = [];
//   for (item of this) {
//     ret.push(item[key]);
//   }
//   return ret;
// };

const mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

const findBy = function (key, val) {
  for (item of this) {
    if (item[key] === val) return item;
  }
};

// const filterBy = function (k, v, isInclude = false) {
//   if (!isInclude) {
//     return this.filter((val) => val[k] === v);
//   } else {
//     return this.filter((val) => val[k].includes(v));
//   }
// };

const filterBy = function (k, v, isInclude = false) {
  //isIncludes할때 정규식으로 대신 할수도 있음
  const cb = isInclude ? (a) => a[k]?.includes(v) : (val) => val[k] === v;
  return this.filter(cb);
};

const rejectBy = function (k, v, isInclude = false) {
  if (!isInclude) {
    return this.filter((val) => val[k] !== v);
  } else {
    return this.filter((val) => !val[k].includes(v));
  }
};

// const sortBy = function (str) {
//   console.log(str);
//   if (str.includes("desc")) {
//     str = str.split(":")[0];
//     const ret = this.sort((a, b) => (a[str] - b[str] > 0 ? -1 : 1));
//     console.log(ret);
//   }
//   return this.sort((a, b) => (a[str] - b[str] > 0 ? -1 : 1));
// };

const sortBy = function (prop_dir) {
  const [prop, order = "asc"] = prop_dir.split(":");
  const dir = order === "asc" ? 1 : -1;

  return this.sort((a, b) => (a[prop] > b[prop] ? dir : -dir));
};

Array.prototype.mapBy = mapBy;
Array.prototype.findBy = findBy;
Array.prototype.filterBy = filterBy;
Array.prototype.rejectBy = rejectBy;
Array.prototype.sortBy = sortBy;

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(val) {
      this[0] = val;
    },
  },
  lastObject: {
    get() {
      //this.at(-1)
      return this[this.length - 1];
    },
    set(val) {
      //여기는 할당영역이라 this.at(-1)하면 함수기 때문에 하면 안됨
      this[this.length - 1] = val;
    },
  },
});

// Object.assign(users, {
//   firstObject: function firstObject() {
//     return users[0];
//   },
// });

// Object.assign(users, {
//   lastObject: function lastObject() {
//     return users.at(-1);
//   },
// });

console.log(users);

// Object.assign(users, { mapBy });

console.log(users);
console.log([1, 2, 3, 4]);

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]); // users.map(u => u['id'])
assert.deepStrictEqual(users.mapBy("name"), ["Hing", "Lee", "Kim"]);
assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.filterBy("name", "i", true), [hong, kim]); // key, value일부, isInclude
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy("name", "i", true), [lee]);
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, lee);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
//set할 떄는 at안되니까 편리하게 쓰려는 것
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);

class Dog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  fn() {
    return "FN";
  }

  static sfn() {
    // Dog.sfn
    return "SFN";
  }
}
const lucy = new Dog("Lucy");
const { sfn } = Dog;
const { fn } = Dog.prototype;
const { name: aa, fn: fnnn, getName } = lucy;

console.log(aa, sfn(), fnnn(), getName); // ?
console.log(getName.bind(lucy)()); // ?
console.log(getName.call(lucy)); // ?
// getName(); // ?
return;
