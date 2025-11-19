// ⇔ function declareFn(name) {
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };

const expressFn = function (name) {
  // if, 'use strict' ?
  this.name = name;
  console.log(this, new.target, this.name, name);
};

const arrowFn = (name) => {
  this.name = name;
  console.log(this, new.target, this.name, name);
};

expressFn("expfn");
expressFn.apply(hong, ["expfn"]);
arrowFn.call(kim, "afn");
// 셀로우 카피해서 적용하는 수밖에 없는데 큰 의미가 없음
// this.id = kim.id;
console.log("this", globalThis);
arrowFn("afn");

const dfn = new expressFn("D");
// const afn = new arrowFn("A"); // error!
return;

console.log("-------------------------------------");
const Dog = function (name) {
  console.log(this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function () {
    console.log("bark=", new.target, this.name, name);
  };
  this.bark2 = () => console.log("bark2=", new.target, this.name, name);
};

// const dog = Dog("Doggy");
// const lucy = new Dog("Lucy");
// console.log("lucy", lucy);
// console.log("lucy>>", lucy instanceof Dog, lucy);

// Dog.bark(); // is not a function
// lucy.bark(); // ?
// lucy.bark2(); // ?
// console.log("type=", typeof dog); // ?
// console.log("type=", typeof lucy); // ?

console.log("-------------------------------------");
this.x = "module";
const Cat = (name) => {
  console.log("Cat>>", this, new.target);
  this.name = name;

  this.bark = function () {
    console.log("bark=", new.target, this.name, name);
  };

  this.bark2 = () => console.log("bark2=", this.name, name);

  return this;
};

const cat = Cat("Coco");
console.log(this);
console.log(this === cat);
// const cat = new Cat(''); // error!!
cat.bark(); // ?
// cat.bark2(); // ?
// Cat.bark(); // ?
console.log("type=", typeof cat); // ?

// cf. FunctionEnvironmentRecord.[[ThisValue]]

//constructor
class Man {
  constructor(id, name) {
    console.log("****************");
  }
  getUserInfo() {}
}

// const m1 = Man();
const m2 = new Man();

// factory function
function createUser(id, name) {
  return {
    id,
    name,
    getUserInfo() {
      return `${this.id}, ${this.name}`;
    },
  };
}

const lee = createUser(1, "lett");
console.log("lee>>", lee.getUserInfo());
const park = createUser(4, "park");
console.log("park>>", park.getUserInfo());

console.log("-------------------------------------");
const dogX = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  // whatsYourName() {
  //   setTimeout(this.showMyName.bind(this), 1000);
  // },
  //예전방식
  // var self = this;
  // setTimeout(() => {
  // 	self.showMyName();
  // }, 1000);
  //화살표함수
  whatsYourName() {
    setTimeout(() => {
      this.showMyName();
    }, 1000);
  },
};

dogX.whatsYourName();

console.log("---------------------------------------------------------");
//function debounce() {}
const debounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(cb.bind(this), delay, ...args);
  };
};

const f = function ff() {
  console.log("f>>", new Date());
};
const f2 = function f2(a, b) {
  console.log("f22>>", new Date(), this.x, a + b);
};

const throttle = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      cb.call(this, ...args);
      timer = undefined;
    }, delay);
  };
};

const search = debounce(f, 200);
const search2 = throttle(f2, 100);

let cnt = 0;
const intl = setInterval(() => {
  console.log("intl", cnt, new Date());
  if (++cnt > 10) clearInterval(intl);
  search();
}, 10);

let cnt2 = 0;
const intl2 = setInterval(() => {
  console.log("intl222", cnt2, new Date());
  if (++cnt2 > 10) clearInterval(intl2);
  search2.bind({ x: 999 })(1, 2);
}, 10);
