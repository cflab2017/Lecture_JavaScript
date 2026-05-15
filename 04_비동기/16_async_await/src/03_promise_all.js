/**
 * await 과 Promise.all 을 조합해 병렬 결과를 받습니다.
 */
function fetchValue(label, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(label), ms));
}

async function loadAll() {
  const [a, b, c] = await Promise.all([
    fetchValue("A", 100),
    fetchValue("B", 200),
    fetchValue("C", 150),
  ]);
  console.log("모든 값:", a, b, c);
}

loadAll();
