/**
 * async 함수와 await 의 기본 동작.
 */
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function main() {
  console.log("시작");
  const value = await delay(200, "안녕!");
  console.log("받음:", value);
  console.log("끝");
}

main();
