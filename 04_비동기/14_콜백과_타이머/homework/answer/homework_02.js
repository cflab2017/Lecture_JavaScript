/**
 * 세 개의 비동기 작업을 순차적으로 실행합니다.
 * @param {string} name 작업 이름
 * @param {Function} done 완료 콜백
 */
function task(name, done) {
  setTimeout(() => {
    console.log(`${name} 완료`);
    done();
  }, 300);
}

task("A", () => {
  task("B", () => {
    task("C", () => {
      console.log("모든 작업 종료");
    });
  });
});
