/**
 * Promise 체이닝으로 비동기 단계를 순차 실행합니다.
 */
function step(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} 완료`);
      resolve(name);
    }, ms);
  });
}

step("A", 100)
  .then((prev) => step(`B(after ${prev})`, 100))
  .then((prev) => step(`C(after ${prev})`, 100))
  .then((last) => console.log("최종:", last));
