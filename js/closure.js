function discount(dcRate = 0.1) {
  // const dcRate = 0.1;
  return (price) => price * dcRate;
}

const items = [
  { item: "상품A", price: 32000 },
  { item: "상품B", price: 32000 },
];
const discounter = discount();

for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - discounter(orgPrice);
  console.log(`🚀 ${item}~ salePrice:`, salePrice.toLocaleString());
}

console.log("-------------------------------");
const action = ["입장", "입장", "입장", "퇴장", "입장", "퇴장"];

const [check, disconnect, getCount] = currentCount();
for (const status of action) {
  if (status === "입장") check();
  else disconnect();
}

function currentCount() {
  let cnt = 0;

  function connect() {
    cnt++;
  }
  function disconnect() {
    cnt--;
  }
  function getCount() {
    return cnt;
  }

  // return {
  //   connect,
  //   disconnect,
  //   getCount,
  // };
  return [connect, disconnect, getCount];
}

console.log("~cnt", getCount());
