/** 두 숫자의 산술 결과를 표로 출력한다. */
const a = 13;
const b = 4;

const result = {
  "+": a + b,
  "-": a - b,
  "*": a * b,
  "/": a / b,
  "%": a % b,
  "**": a ** b,
};

console.table(result);
