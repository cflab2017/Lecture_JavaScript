/** 함수 표현식과 화살표 함수를 비교한다. */
const sub = function (a, b) {
  return a - b;
};

const mul = (a, b) => a * b;

// 한 줄 본문에서 객체를 반환할 땐 괄호로 감싼다
const wrap = (x) => ({ value: x });

console.log(sub(10, 3));
console.log(mul(4, 5));
console.log(wrap(42));
