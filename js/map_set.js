let hong = { id: 1, name: "Hong" };
const map = new Map([
  [1, 11],
  [2, 22],
]);
map.set("three", 333); // { three: 333 }
map.set("four", [1, 2, 3, 4]); // { four: [1,2, 3, 4] }
map.set(hong.name, hong);
console.log("🚀 ~ map:", map);
map.set(hong, hong.name);
console.log(map); // Map(6) {  1 => 11, 2 => 22, 'three' => 333, 'four' => [ 1, 2, 3, 4 ],    ?, ?}
console.log(map.get(hong)); // 'Hong'
console.log("hong1", map);
map.delete(hong); // console.log(hong?.name); // ?  ⇒ hong = null; console.log(map); // ?
console.log("hasHong=", map.has(hong)); // ?
hong = null;
console.log("hasHongName=", map.has(hong?.name)); // ?
console.log("hong2", map);
map.clear();

map.set(1, 11).set(2, 22).set(3, 33); // ⇐⇒ new Map([[1, 11], [2, 22], [3, 33]);
map.entries();
map.keys();
map.values(); // { [ 1, 11 ], [ 2, 22 ], … };  { 1, 2, … };  { 11, 22, … }
const map2 = new Map([...map]); // Map(2) { 1 => 11, 2 => 22, 3 => 33 }
const map3 = new Map([...map, ...map2]); // Map(2) { 1 => 11, 2 => 22, 3 => 33 }
console.log(map2);
console.log(map3);

// (주의) Map의 key가 reference type일 경우 GC 대상이 안됨!(: Map자체가 참조)

console.log("---------------------------------------");

const kim = { id: 2, name: "kim" };
const wmap = new WeakMap();
// wmap.set(1, 11);
wmap.set(new Number(1), 11);
wmap.set(kim, kim.name);
return;
