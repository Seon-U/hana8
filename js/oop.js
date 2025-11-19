//상속과 다형성 용. 일상에서는 크게 안씀 (js기준)

// class Emp extends Pet {
class Emp {
  //안써도 됨...! 점점 안쓰도록 발전하는 추세
  // firstName;
  // lastName;
  constructor(name) {
    // this.setFullname(name);
    this.fullName = name;
  }

  //'Kildong Hong'
  set fullName(name) {
    //여기 this안주면 안됨. 안주면 strict아니면 var로 볼 수 있음.
    //const 붙여도 안됨 다른 변수 인식
    [this.firstName, this.lastName] = name.split(" ");
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const hong = new Emp("kildong Hong");
// console.log(hong.getFullName());
console.log(hong.fullName);
hong.fullName = "Nanda Kim";
console.log(hong.fullName);

//여기 잠시 이해안됨
console.log(Object.getOwnPropertyDescriptor(Emp.prototype, "fullName"));
console.log("hong=", hong, hong.fullName);

const kim = { id: 1, firstName: "Nanda", lastName: "Kim" };
//무슨 작업을 할 떄 깥이 할 수 있게 깔아주는 느낌
const proxyObj = new Proxy(kim, {
  //proxyObj직접 조작 - receiver
  //x = target.fullName
  get(target, prop, receiver) {
    console.log("recevier>>", receiver === proxyObj);
    if (prop === "fullName") {
      return `${target.firstName} ${target.lastName}`;
    }
    return target[prop];
  },
  //target.fullName = x;
  set(target, prop, value, receiver) {
    if (prop === "fullName") {
      [target.firstName, target.lastName] = value.split(" ");
    } else {
      target[prop] = value;
    }
  },
});

console.log(proxyObj.fullName, kim, kim.fullName);
console.log(kim.id);
//kim이면 false, hong이면 true
console.log(proxyObj instanceof Emp);
// console.log(proxyObj instanceof Proxy);

// Object.defineProperty(Emp.prototype, 'upperName', {
// })

//없던 프로퍼티 새로 생
Object.defineProperties(Emp.prototype, {
  upperName: {
    get() {
      return this.fullName.toUpperCase();
    },
  },
  lowerName: {
    get: function () {
      return this.fullName.toLowerCase();
    },
  },
});
//메소드 다 프로토타입에 존재, 조작위해 따로 정의아님.
Emp.prototype.nameLength = function () {
  //여기 this는 인스턴스
  return this.fullName.length;
};
console.log("upper", hong.upperName);
console.log("upper", hong.lowerName);
console.log("upper", hong.nameLength());

console.log("---------------------------------------------------");

class Pet {
  feed(nutrient) {
    console.log(`feed to ${this.name} :`, nutrient);
  }
}

//1. extens. 2. 안되면 이렇게
Object.assign(Emp.prototype, { feed: Pet.prototype.feed });
console.log(hong.feed("xxxx"));
