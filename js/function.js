// const gate1counter = (function x() {
//   let counter = 0;
//   return () => {
//     counter++;
//   };
// })(); //IIFE

// // const gate1counter = counter();
// console.log("🚀 ~ gate1counter:", gate1counter());
// console.log("🚀 ~ gate1counter:", gate1counter());
// console.log("🚀 ~ gate1counter:", gate1counter());
// // const gate2counter = counter();
// console.log("🚀 ~ gate2counter:", gate1counter());

// // let data;
// (async function af() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//     (res) => res.json()
//   );
//   console.log(data);
// })().then((data) => data);

// // af();
// // console.log("🚀 ~ data:", data);

// // useEffect();
// //var 로 쓰면 10으로 나오고 let으로 쓰면 1,23,4,이렇게 감
// for (let i = 0; i < 10; i++) {
//   setTimeout(
//     (n) => {
//       console.log("xxxxxxxxx", i, n);
//     },
//     1000,
//     i
//   );
// }

// setInterval(
//   (n) => {
//     console.log("xxxxxx", n);
//   },
//   1000,
//   100
// );

// setTimeout(() => clearInterval(intl), 5000);

const n = 0;
{
  const n = 5;
  function f1() {
    const n = 1;
    return () => {
      console.log(this);
    };
  }
}

const f = f1();
f();
