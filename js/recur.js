function sum100() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum100());

function sum100recur(n = 1) {
  if (n === 100) return n;

  return n + sum100recur(n + 1);
  //1 + 2 + 3 + ... + 100
}

console.log(sum100recur());

console.log("---------------------------------------");

function factorial(n) {
  let ret = 1;
  while (n > 1) {
    ret *= n;
    n--;
  }
  return ret;
}

console.log("🚀 ~ factorial ~ factorial:", factorial(5));

function factorialRecur(n) {
  if (n === 1) return 1;
  return n * factorialRecur(n - 1);
}

console.log("🚀 ~ factorialRecur ~ factorialRecur:", factorialRecur(5));

function factorialTCO(n, acc = 1) {
  if (n === 1) return acc;
  return factorialTCO(n - 1, acc * n);
  //f(5) ---> f(4, 1 * 5) => f(3, 1 * 5 * 4) ==> f(2, 5* 4*3)
}
console.log("🚀 ~ factorialTCO ~ factorialTCO:", factorialTCO(5));
console.log("-----------------------");

function makeArr(n) {
  if (n === 1) return [1];
  return [...makeArr(n - 1), n];
}

console.log(makeArr(4));
console.log(makeArr2(4));

function makeArr2(n, ...acc) {
  if (n === 0) return acc;
  return makeArr2(n - 1, n, ...acc);
}
// function makeArr2(n, acc = []) {
//   if (n === 0) return acc;
//   return makeArr2(n - 1, [n, ...acc]);
// }

console.log("---------------------------------");
function makeArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

console.log("🚀 ~ makeArray ~ makeArray:", makeArray(5));

function makeArrayTCO(n, acc = []) {
  if (n === 1) return [1, ...acc];
  return makeArrayTCO(n - 1, [n, ...acc]);
}

console.log("🚀 ~ makeArrayTCO ~ makeArrayTCO:", makeArrayTCO(10));
