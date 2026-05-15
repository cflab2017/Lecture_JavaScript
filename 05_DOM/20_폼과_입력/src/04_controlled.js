/**
 * 자바스크립트가 입력값을 통제(대문자로 강제).
 */
const username = document.querySelector("[name=username]");
const echo = document.querySelector("#echo");

username.addEventListener("input", (e) => {
  const upper = e.target.value.toUpperCase();
  e.target.value = upper;
  echo.textContent = `현재 값: ${upper}`;
});
