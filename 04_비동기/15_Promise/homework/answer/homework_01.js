/**
 * 주어진 시간만큼 기다린 뒤 resolve 되는 Promise.
 * @param {number} ms 대기 밀리초
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log("시작");
delay(500).then(() => console.log("0.5초 경과"));
