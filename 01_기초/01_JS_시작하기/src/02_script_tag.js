/** index.html 에서 defer 로 로드되어 DOM 에 메시지를 출력한다. */
const target = typeof document !== "undefined" ? document.getElementById("app") : null;

if (target) {
  target.textContent = "스크립트가 성공적으로 연결되었습니다!";
} else {
  console.log("브라우저가 아닌 환경입니다. node 로 실행 중일 수 있습니다.");
}
