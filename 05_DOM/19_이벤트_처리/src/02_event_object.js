/**
 * 이벤트 객체에서 정보를 읽습니다.
 */
const input = document.querySelector("#text");
input.addEventListener("input", (event) => {
  console.log("type:", event.type);
  console.log("target value:", event.target.value);
});
