/** 다양한 console 메서드를 비교한다. */
console.log("log: 일반 메시지");
console.info("info: 정보성 메시지");
console.warn("warn: 경고 메시지");
console.error("error: 오류 메시지");

const users = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Linus" },
];
console.table(users);

console.time("loop");
let sum = 0;
for (let i = 0; i < 1000; i += 1) sum += i;
console.timeEnd("loop");
console.log("sum =", sum);
