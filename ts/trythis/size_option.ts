type X = { id: "XS" | "S" | "M" | "L" | "XL"; price: number };

const SIZE: X[] = [
  { id: "XS", price: 8000 },
  { id: "S", price: 10000 },
  { id: "M", price: 12000 },
  { id: "L", price: 14000 },
  { id: "XL", price: 15000 },
];

type O = { [k in keyof typeof SIZE]: (typeof SIZE)[k] };
type size1 = (typeof SIZE)[number]["id"];
const sizeOption1 = { XS: 1, S: 5, M: 2, L: 2, XL: 4, XXL: 0 };
// type Q = keyof typeof sizeOption1;

const totalPrice1 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption1[size.id] * size.price,
  0
);

const sizeOption2 = { XS: 2, S: 3, MM: 4, L: 5, XL: 6 };
const totalPrice2 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption2[size.id] * size.price,
  0
);

console.log("--------------------------------------");

// type Ud2 = (TUser | TDept) & { addr: string };

interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

interface Ud2 {
  id: number;
  [x: string]: number | string | undefined;
  addr: string;
}

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
