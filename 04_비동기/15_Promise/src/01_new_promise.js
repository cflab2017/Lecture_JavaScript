/**
 * new Promise 로 비동기 작업을 표현합니다.
 */
const promise = new Promise((resolve, reject) => {
  const ok = Math.random() > 0.3;
  setTimeout(() => {
    if (ok) resolve("성공!");
    else reject(new Error("실패..."));
  }, 200);
});

promise
  .then((value) => console.log("결과:", value))
  .catch((err) => console.error("에러:", err.message));
