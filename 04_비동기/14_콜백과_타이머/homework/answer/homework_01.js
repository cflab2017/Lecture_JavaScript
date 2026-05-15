/**
 * n 부터 0까지 1초 간격으로 출력 후 "발사!" 를 출력합니다.
 * @param {number} n 시작 숫자
 */
function countdown(n) {
  let current = n;
  const id = setInterval(() => {
    if (current < 0) {
      clearInterval(id);
      console.log("발사!");
      return;
    }
    console.log(current);
    current -= 1;
  }, 1000);
}

countdown(3);
