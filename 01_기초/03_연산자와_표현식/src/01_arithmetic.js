/** 산술/할당 연산자를 살펴본다. */
const a = 17;
const b = 5;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

let n = 10;
n += 5;  console.log("n += 5 →", n);
n *= 2;  console.log("n *= 2 →", n);
n **= 2; console.log("n **= 2 →", n);
