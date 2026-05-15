/** 기본값, 나머지 매개변수, 구조 분해를 함께 사용한다. */
function greet(name = "친구", greeting = "안녕") {
  return `${greeting}, ${name}!`;
}

function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

function describe({ name, age = "?" } = {}) {
  return `${name} (${age}세)`;
}

console.log(greet());
console.log(greet("Ada", "Hi"));
console.log(sum(1, 2, 3, 4, 5));
console.log(describe({ name: "Linus" }));
