/**
 * FormData 로 한 번에 값 수집.
 */
const form = document.querySelector("#loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  for (const [key, value] of data) {
    console.log(`${key} = ${value}`);
  }
});
