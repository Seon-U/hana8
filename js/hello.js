console.log("Hello world!!!!");

let a = 1;
let b = 2;
const c = (a++, b++);
console.log("🚀 ~ c:", c, a && b);

// 91~100: A
// 81~90: B
// 71~80: C
// D
const score = 72;
function getGrade(number) {
  switch (true) {
    case number >= 91:
      return "A";
    case number >= 81:
      return "B";
    case number >= 71:
      return "C";
    default:
      "D";
  }
}

let grade = getGrade(score);
console.log("🚀 ~ grade:", grade);

grade = "D";
if (score >= 91 && score <= 100) grade = "A";
if (score >= 81 && score <= 90) grade = "B";
if (score >= 71 && score <= 80) grade = "C";

console.log("grade", grade);

switch (score) {
  case 91:
  case 92:
  case 93:
  case 94:
  case 95:
  case 96:
  case 100:
    grade = "A";
    break;

  case 82:
    grade = "B";
    break;

  default:
    "D";
}
