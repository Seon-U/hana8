setImmediate(() => console.log("setImmediate11", new Date()));
setTimeout(() => console.log("setTimeout11", new Date()), 0);
// process.nextTick(() => console.log('nextTick'));
process.nextTick(() => {
  console.log("nextTick");
});

// i/o polling
const fs = require("fs"); // CJS
fs.readFile("hello.txt", (result) => {
  console.log("++++++++++++++++++++++++++++++++++++++");
  setTimeout(() => {
    console.log("setTimeout22");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate22");
  });
  process.nextTick(() => console.log("nextTick22"));
});

process.nextTick(() => console.log("22222"));

const f3 = () => (x) => x ** 2;
function f33() {
  return (x) => x ** 2;
}

const f23 = () => {}; //function f3() {}
const fx = () => (x) => x ** 2;
const f44 = () => fx;
