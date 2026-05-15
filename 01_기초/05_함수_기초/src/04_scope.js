/** 블록 스코프와 함수 스코프의 차이를 확인한다. */
function demo() {
  const outer = "바깥";
  if (true) {
    const inner = "안쪽";
    console.log(outer, inner);
  }
  // console.log(inner); // ReferenceError
}
demo();

// 클로저 맛보기: 함수가 자기가 선언된 환경의 변수를 기억한다
function makeCounter() {
  let count = 0;
  return () => (count += 1);
}
const next = makeCounter();
console.log(next(), next(), next()); // 1 2 3
