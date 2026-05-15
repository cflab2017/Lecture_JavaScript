/** 옵셔널 체이닝과 nullish 병합으로 안전한 값을 얻는다. */
const orders = [
  { id: 1, customer: { name: "A", address: { city: "Seoul" } } },
  { id: 2, customer: { name: "B" } },
  { id: 3 },
];

for (const order of orders) {
  const city = order?.customer?.address?.city ?? "주소 미입력";
  console.log(`주문 ${order.id}: ${city}`);
}
