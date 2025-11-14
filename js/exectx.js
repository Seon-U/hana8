var x = 1;

function f1() {
  console.log(x, y); //static: 1, dynamic:2
  //[[OuterEnv]]
}
function f2() {
  var x = 2;
  this.y = 999;
  f1();
  f1.bind({ y: 1 })();
}

let cnt = 0;
const f3 = () => {
  cnt++;
};
f2();
