/**
 * 세 개의 비동기 숫자를 병렬로 받아 합을 출력합니다.
 */
function asyncNumber(n, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(n), ms));
}

Promise.all([asyncNumber(10, 100), asyncNumber(20, 150), asyncNumber(30, 80)])
  .then((nums) => {
    const sum = nums.reduce((a, b) => a + b, 0);
    console.log("합계:", sum);
  });
