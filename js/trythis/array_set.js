const assert = require("assert");

// 이전 Array.prototype에 Set을 이용하여 uniqBy() 함수도 추가하시오.
// Array.prototype.uniqBy = function (prop) {
//   const ret = new Set();
//   for (i of this) {
//     ret.add(i[prop]);
//   }
//   return [...ret];
// };
Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map((a) => a[prop]))];
};

// Array.prototype.groupBy = function (prop) {
//   const proxy = new Map();
//   const ret = Object.create(null);
//   for (const i of this) {
//     if (proxy.has(i[prop])) {
//       proxy.get(i[prop]).push(i);
//     } else {
//       proxy.set(i[prop], [i]);
//     }
//   }
//   // return Object.fromEntries(proxy.entries());
//   for (i of proxy.entries()) {
//     ret[i[0]] = i[1];
//   }
//   return ret;
// };

Array.prototype.groupByMap = function (prop) {
  const map = new Map();
  for (const a of this) {
    const key = a[prop]; //'HR'
    const val = map.get(key);
    if (val)
      val.push(a); // Map() {'HR': [emp1]};
    else map.set(key, [a]); // set('HR', a);
  }
  return map; // 'HR': [emp1, emp2], 'Sales':..
};

// Array.prototype.groupBy = function (prop) {
//   return this.groupByMap(prop)
//     .entries()
//     .reduce(
//       (acc, [k, v]) => ({
//         ...acc,
//         [k]: v,
//       }),
//       {}
//     );
// };
Array.prototype.groupBy = function (prop) {
  const ret = {};
  for (const a of this) {
    const key = a[prop];
    //[] 안걸림
    // ret[key] = ret[key] || [];
    ret[key] ||= [];
    ret[key].push(a);
  }
  return ret;
  // return this.groupByMap(prop)
  //   .entries()
  //   .reduce(
  //     (acc, [k, v]) => ({
  //       ...acc,
  //       [k]: v,
  //     }),
  //     {}
  //   );
};

const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];
const y = users.uniqBy("dept"); // [ 'HR', 'Server', 'Front', 'Sales' ]
console.log(y);

console.log(Map.groupBy(users, (user) => user.dept));
const x = Object.groupBy(users, (user) => user.dept);
console.log(x);

assert.deepStrictEqual(
  users.groupBy("dept"),
  Object.groupBy(users, (user) => user.dept)
);
return;
