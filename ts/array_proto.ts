declare global {
  interface Array<T> {
    firstObject: T;
    lastObject: T;
    mapBy(prop: keyof T): T[];
    //조건부 타입 써서 내로잉
    //prop과 value에 연관이 없기 때문에 연관 체크가 안됨
    // filterBy<K extends keyof T>(prop: keyof T, value: T[keyof T], isIncludes?: boolean): T[];
    filterBy<K extends keyof T>(
      prop: K,
      value: T[K],
      isIncludes?: boolean
    ): T[];

    rejectBy: <K extends keyof T>(
      prop: K,
      value: T[K],
      inIncludes?: boolean
    ) => T[];

    findBy: <K extends keyof T>(prop: K, value: T[K]) => T;

    sortBy: <P extends keyof T & (string | number)>(
      prop: `${P}:${"asc" | "desc"}` | `${P}`
    ) => T[];

    // groupBy: <K extends PropertyKey>(gfn: (a: T) => K) => { [k in K]: T[] };
    // groupBy: (prop: keyof T) => Partial<Record<keyof T, T[]>>;
    groupByFn<K extends T[keyof T] & PropertyKey>(
      gfn: (a: T) => K
    ): Partial<Record<K, T[]>>;

    // groupBy: <T, K extends string | symbol | number>(gfn: (a: T) => K)
    // groupBy: <T, K extends string | symbol | number>(
    //   gfn: (a: T) => K
    // ) => Partial<Record<K, T[]>>;

    groupBy<K extends T[keyof T] & PropertyKey>(
      prop: keyof T
    ): Partial<Record<K, T[]>>;
  }
}

Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

// Array.prototype.filterBy = function (prop, value, isIncludes = false) {
//   return this.filter(
//     isIncludes ? (a) => a[prop]?.includes(value) : (a) => a[prop] === value
//   );
// };

// Array.prototype.filterBy = function <T>(
//   this: T[],
//   prop: keyof T,
//   value: T[keyof T],
//   isIncludes = false
// ) {
//   return this.filter(
//     isIncludes
//       ? (a) => {
//           return Array.isArray(a[prop])
//             ? a[prop]?.includes(value)
//             : typeof a[prop] === "string" &&
//                 typeof value === "string" &&
//                 a[prop]?.includes(value);
//         }
//       : (a) => a[prop] === value
//   );
// };

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  return this.filter((a) =>
    isIncludes ? a[prop]?.includes(value) : a[prop] === value
  );
  // const cb: (a: (typeof this)[number]) => boolean = (a) =>
  // isIncludes ? a[prop].includes(value) : a[prop] === value;
  // const cb: (a: (typeof this)[number]) => boolean = isIncludes
  //   ? (a) => typeof a[prop] === "string" && a[prop]?.includes(value)
  //   : (a) => a[prop] === value;

  // return this.filter(cb);
};
// console.log(users.filterBy("id", "2")); // Error

Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  return this.filter(
    isIncludes ? (a) => !a[prop]?.includes(value) : (a) => a[prop] !== value
  );
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop) {
  // name | name:desc | name:asc
  // const [key, direction = "asc"] = prop.split(":");
  const [key, direction = "asc"] =
    typeof prop === "string" && prop.includes(":")
      ? prop.split(":")
      : [prop, "asc"];
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  // console.log('🚀  dir:', dir, prop);
  if (key) return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
  else return this;
};

type key = keyof Object;

Array.prototype.groupBy = function <T, K extends T[keyof T] & PropertyKey>(
  prop: keyof T
) {
  const ret: Partial<Record<K, T[]>> = {};
  // const ret = {} as { [k in K]: T[] };
  for (const a of this) {
    const key: K = a[prop];
    ret[key] ||= [];
    ret[key].push(a);
  }

  return ret;
};

Array.prototype.groupByFn = function <
  T,
  K extends keyof T[keyof T] & PropertyKey,
>(gfn: (a: T) => K) {
  const ret: Partial<Record<K, T[]>> = {};
  // as { [k in K]: T[] };
  for (const a of this) {
    const k = gfn(a);
    ret[k] ||= [];
    ret[k].push(a);
  }

  return ret;
};

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
      // this.with(0, value); // pure fn
    },
  },
  lastObject: {
    get() {
      return this.at([-1]);
    },
    set(value) {
      this[this.length - 1] = value;
      // this.with(-1, value);
    },
  },
});

const hongx = { id: 1, name: "Hong", dept: "dev" };
const kimx = { id: 2, name: "Kim", dept: "hi" };
const leex = { id: 3, name: "Lee", dept: "study" };
const users = [hongx, leex, kimx];

console.log(users.mapBy("id")); // [1, 3, 2];
console.log(users.mapBy("name")); // ['Hong', 'Lee', 'Kim']);
console.log(users.filterBy("id", 2)); // [kim]);
console.log(users.filterBy("name", "i", true)); // [kim]
console.log(users.rejectBy("id", 2)); // [hong, lee]
console.log(users.rejectBy("name", "i", true)); // [hong, lee]
console.log(users.findBy("name", "Kim")); //  kim;
console.log(users.sortBy("name:desc")); //  [lee, kim, hong];
console.log(users.sortBy("name")); // [hong, kim, lee]
//?
console.log(users.groupBy(({ dept }) => dept));
/*
Server: [
  { id: 1, name: 'Hong', dept: 'Server' },
  { id: 2, name: 'Kim', dept: 'Server' },
],
Client: [
  { id: 3, name: 'Lee', dept: 'Client' }
],
*/

console.log("first/last=", users.firstObject.name, users.lastObject.name); // hong/lee
users.firstObject = kimx;
users.lastObject = hongx;
console.log("first/last=", users.firstObject.name, users.lastObject.name); // kim/hong
