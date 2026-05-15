/**
 * try/catch 로 비동기 에러를 처리합니다.
 */
function fetchData(ok) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ok) resolve({ id: 1 });
      else reject(new Error("네트워크 실패"));
    }, 100);
  });
}

async function run() {
  try {
    const data = await fetchData(false);
    console.log("성공:", data);
  } catch (err) {
    console.error("에러:", err.message);
  } finally {
    console.log("정리");
  }
}

run();
