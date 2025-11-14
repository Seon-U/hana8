// function getWeekName() {
//   const date = arguments[0];
//   console.log("🚀 ~ getWeekName ~ date:", date);
// }
function getWeekNameBeta(date) {
  // if (date === undefined) date = new Date();
  date = date ?? new Date();
  let weekName;
  switch (date.getDay()) {
    case 0:
      weekName = "일";
      break;
    case 1:
      weekName = "월";
      break;
    case 2:
      weekName = "화";
      break;
    case 3:
      weekName = "수";
      break;
    case 4:
      weekName = "목";
      break;
    case 5:
      weekName = "금";
      break;
    case 6:
      weekName = "토";
      break;
  }
  console.log(`오늘은 ${weekName}요일 입니다.`);
}
const WEEEKNAMES = "일월화수목금토";

getWeekNameBeta(new Date());
getWeekNameBeta();
getWeekName();

function getWeekName(date) {
  const weekName = WEEEKNAMES[(date ?? new Date()).getDay()];
  console.log(`오늘은 ${weekName}요일 입니다.`);
}

const getWN = (date) => WEEEKNAMES[(date ?? new Date()).getDay()];

console.log("******>>>", getWN(new Date()));
