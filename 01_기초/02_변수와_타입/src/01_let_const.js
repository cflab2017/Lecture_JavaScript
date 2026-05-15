/** const 와 let 의 동작 차이를 비교한다. */
const name = "Ada";
let age = 30;

age += 1;
console.log(`${name}, ${age}`);

// const 객체의 내부는 변경 가능
const user = { name: "Linus" };
user.name = "Grace";
console.log("user:", user);

try {
  // user = {};  // 재할당은 불가 - TypeError
} catch (e) {
  console.error(e.message);
}
