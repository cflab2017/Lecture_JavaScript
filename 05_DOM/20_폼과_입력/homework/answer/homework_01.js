/**
 * 폼 제출 시 FormData 로 값을 출력합니다.
 */
const form = document.querySelector("#login");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  for (const [key, value] of data) {
    console.log(`${key}: ${value}`);
  }
});
