/**
 * setInterval 로 0.5초마다 카운트하고 3회 뒤 멈춥니다.
 */
let count = 0;
const intervalId = setInterval(() => {
  count += 1;
  console.log(`tick ${count}`);
  if (count >= 3) {
    clearInterval(intervalId);
    console.log("정리 완료");
  }
}, 500);
