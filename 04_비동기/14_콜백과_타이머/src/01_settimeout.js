/**
 * setTimeout 기본 사용법.
 * 1초 뒤 메시지를 출력하고, 또 하나의 타이머는 즉시 취소합니다.
 */
console.log("시작");

setTimeout(() => {
  console.log("1초 뒤 실행됨");
}, 1000);

const cancelId = setTimeout(() => {
  console.log("이 메시지는 출력되지 않습니다.");
}, 500);
clearTimeout(cancelId);

console.log("끝 (동기 코드)");
