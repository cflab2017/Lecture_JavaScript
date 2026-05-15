/**
 * 세 URL 의 가짜 요청을 병렬로 보내고 총 시간을 측정합니다.
 */
function fakeFetch(url, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(`${url} OK`), ms));
}

async function main() {
  const start = Date.now();
  const results = await Promise.all([
    fakeFetch("/a", 200),
    fakeFetch("/b", 250),
    fakeFetch("/c", 150),
  ]);
  console.log("결과:", results);
  console.log("총 시간:", Date.now() - start, "ms");
}

main();
