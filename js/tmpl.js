const holiday = "한글날";
const month = 10;
const day = 9;

console.log(`${holiday}은 ${month}월 ${day}일입니다`);
f`${holiday}은 ${month}월 ${day}일입니다.`;

//템플릿 리터럴
//시작부분 하나 더 줌
// txts >> ["", "은 ", "월 ", "일입니다."];
// 리엑트 스타일링 컴포넌트 이렇게 쓰기도 함 style``
function f(txts, ...args) {
  const [a, b, c] = args;
  console.log("txts>>", txts);
  console.log("a>>", a);
  console.log("b>>", b);
  console.log("c>>", c);
}

console.log("--------------------------------------");
for (let i = 0; i < 100; i++) {
  const x = String.fromCharCode(i);
  console.log(i, "->", x);
  console.log(`BTS${String.fromCharCode(0)}`);
}

console.log("--------------------------------------");
for (let i = "가".charCodeAt(); i <= "깋".charCodeAt(); i++) {
  //받침 제거 뽑기 - 조사
  console.log(i, String.fromCharCode(i), (i - 16) % 28);
}

console.log("--------------------------------------");
const str = "Senior Coding Learning JS";
// /[A-Za-zd]/.test(
//   str
// ) // ?
// /(A-Za-z\d)/.test(
//   str
// ) // ?
// /(A-Za-z\d)/.test(
//   "XA-z2"
// ) // ?
console.log(/(A-Za-z\d)/.test("A-Za-z2")); // ?

return;
