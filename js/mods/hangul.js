// 오른 쪽과 같은 형태로 출력하는 fmt 함수를 작성하시오.
console.log("**************");
function fmt(texts, ...args) {
  let ret = "";
  for (let i = 0; i < texts.length; i++) {
    ret += texts[i].trim();
    if (args[i]) ret += String(args[i]).padStart(10, " ");
  }
  return ret;
}
const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

export const upperToLower = (str) =>
  str.replace(/[A-Z]/g, (matchedSter) => `*${matchedSter.toLowerCase()}*-`);

console.log(upperToLower("abc Senior Coding Learning JS"));

export const swapCase = (str) => {
  return str.replaceAll(/([A-Z])([a-z]*)/g, (_, up, low) => {
    console.log(_, up, low);
    return `${up.toLowerCase()}${low.toUpperCase()}`;
  });
};

console.log("--------------------------------------");

// 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.

export const telfmt = (tel) => {
  const len = tel?.length;
  if (!len || len < 5) return tel;
  if (len <= 8) return `${tel.substring(0, len - 4)}-${tel.substring(len - 4)}`;

  const n = tel.startsWith("02") ? 2 : 3;
  const e = len > 11 ? len - 11 : 0;

  const regex = new RegExp(`(\\d{${n + e}})(\\d{3,4})(\\d{4})`);
  return tel.replace(regex, "$1-$2-$3");
};

console.log(telfmt("07012341234")); // '070-1234-1234'
telfmt("0101234567"); // '010-123-4567'
telfmt("01012345678"); // '010-1234-5678'
telfmt("0212345678"); // '02-1234-5678'
telfmt("021234567"); // '02-123-4567'
telfmt("0331234567"); // '033-123-4567'
telfmt("15771577"); // '1577-1577'
// ex) in JSX
//    <small>{telfmt(user.tel)}</small>

console.log("--------------------------------------");

var X = 1; //readOnly로 나가짐
export default X;
export const isEndJaum = (str) => {
  const alphaNums = "lmnr136780";
  const lastChar = str.at(-1);

  // if (alphaNums.includes(lastChar)) return true;
  if (/[lmnr136780]/i.test(lastChar)) return true;
  const lastCharCode = lastChar.charCodeAt();

  const 가 = 44032; //가.charCodeAt();
  const 힣 = 55203;
  if (lastCharCode > 가 && lastCharCode <= 힣 && (lastCharCode - 가) % 28 !== 0)
    return true;

  const ㄱ = 12593;
  const ㅎ = 12622;
  if (lastCharCode >= ㄱ && lastCharCode <= ㅎ) return true;

  //ㄱ-ㅎ OR 가 ~ 힣 ==> (lastCharCode - 가) % 28 === 0;
  return false;
};

export const josa = (str, ja_mo) => {
  const [ja, mo] = ja_mo.split("/");
  // return `${str}${isEndJaum(str) ? ja : mo}`;
  return `${isEndJaum(str) ? ja : mo}`;
};
export const iga = (str) => josa(str, "이/가");
export const eunun = (str) => josa(str, "은/는");
export const eulul = (str) => josa(str, "을/를");
export const eyuya = (str) => josa(str, "이어야/여야");

export const searchByKoreanInitialSound = (data, first) => {
  //   //ㄱ => [ㄱ가-깋] //ㄴ => [ㄴ나-닣]
  //   //매칭으로 잡으면 중간 것 빠져도 정확함
  const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
  const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하";
  const 힣next = "힣".charCodeAt(0) + 1;

  const regStr = [...first].reduce((reg, c) => {
    const idx = ㄱㄴㄷ.indexOf(c);
    // if (idx === -1) return `${reg}${c}`;
    const S = 가나다[idx];
    const eCode = (가나다[idx + 1]?.charCodeAt() ?? 힣next) - 1;
    return `${reg}[${c}${S}-${String.fromCharCode(eCode)}]`;
  }, "");
  const regexp = new RegExp(regStr);
  console.log("🚀 ~ searchByKoreanInitialSound ~ regexp:", regexp);
  return data.filter((d) => regexp.test(d));
};
// const searchByKoreanInitialSound = (arr, chars) => {
//   const alpha = [..."ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"];
//   const diff = "까".charCodeAt() - "가".charCodeAt();
//   let regex = "";
//   for (const i of chars) {
//     const idx = alpha.indexOf(i);
//     if (idx === -1) {
//       regex += `[${i}]`;
//       continue;
//     }
//     const start = idx * diff + "가".charCodeAt();
//     const end = start + diff - 1;
//     regex += `[${i}${String.fromCharCode(start)}-${String.fromCharCode(end)}]`;
//   }
//   console.log(regex);
//   return arr.filter((v) => new RegExp(regex).test(v));
// };
