/**
 * HTML5 검증 API 활용.
 */
const form = document.querySelector("#loginForm");
form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.reportValidity();
    console.log("검증 실패");
  } else {
    console.log("검증 통과");
  }
});
