/**
 * 콜백이 중첩되는 패턴(콜백 지옥)을 보여줍니다.
 * 다음 단원에서 Promise 로 어떻게 평탄해지는지 비교해 보세요.
 */
function step(name, ms, callback) {
  setTimeout(() => {
    console.log(`${name} 완료`);
    callback();
  }, ms);
}

step("1단계", 200, () => {
  step("2단계", 200, () => {
    step("3단계", 200, () => {
      console.log("모든 단계 완료");
    });
  });
});
