/**
 * input 과 submit 이벤트.
 */
const form = document.querySelector("#loginForm");
const email = form.querySelector("[name=email]");

email.addEventListener("input", (e) => {
  console.log("입력 중:", e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("폼 제출됨");
});
