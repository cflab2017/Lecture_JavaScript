/**
 * 순차 await 와 병렬 await(Promise.all)의 실행 시간을 비교합니다.
 */
function work(label, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(label), ms));
}

async function sequential() {
  const start = Date.now();
  await work("A", 200);
  await work("B", 200);
  await work("C", 200);
  console.log("순차:", Date.now() - start, "ms");
}

async function parallel() {
  const start = Date.now();
  await Promise.all([work("A", 200), work("B", 200), work("C", 200)]);
  console.log("병렬:", Date.now() - start, "ms");
}

(async () => {
  await sequential();
  await parallel();
})();
