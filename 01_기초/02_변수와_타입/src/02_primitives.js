/** 7 가지 원시 타입을 typeof 로 확인한다. */
const samples = [
  "hello",
  42,
  true,
  undefined,
  null,
  Symbol("id"),
  10n,
];

for (const v of samples) {
  console.log(String(v).padEnd(15), "→", typeof v);
}
