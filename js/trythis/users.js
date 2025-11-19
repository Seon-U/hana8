// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
const assert = require("assert");

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!

// console.log("*****>>", Array.prototype === users.__proto__);
// users.__proto__.addUser = function (newer) {
//   return [...this, newer];
// };

// console.log([1, 2, 3].addUser(4));

// users.addUser(hong); // [kim, lee, park, hong]
// users.removeUser(lee); // [kim, park]
// users.changeUser(kim, choi); // [choi, lee, park]
// // (주의) Array.prototype 조작 금지! (: 모든 배열에 addUser함수가?!)

users.addUser = function (newer) {
  return [...this, newer];
};
// users.removeUser = function (toDel) {
users.removeUser = function ({ id: toDelId }) {
  return this.filter(({ id }) => id !== toDelId);
};

users.changeUser = function (from, to) {
  return this.map((a) => (a.id === from.id ? to : a));
};

//필터돌릴 때 함수같은 건 피해서 돌려줌. 문제는 안생김
console.log(
  "users-function>>",
  users.filter((u) => {
    console.log(u, typeof u);
    typeof u === "function";
  })
);

//함수 앞으로 들어감. 객체와 함수 분리됨
// users.push(hong);
// console.log("users-keys>>", Object.keys(users));
// console.log("users-keys>>", Object.keys(users).filter(isNaN));

Object.keys(users)
  .filter(isNaN)
  .forEach((fname) =>
    Object.defineProperty(users, fname, { enumerable: false })
  );
//users에 안보이도록 세팅 = 옛날문제긴 함
// Object.defineProperty(users, "addUser", { enumerable: false });
// Object.defineProperty(users, "removeUser", { enumerable: false });

// Object.defineProperties(users);

console.log(users);

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

// console.log("users>>>>", users);
assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

// console.log("users>>>>", users);
