/**
 * preventDefault 로 링크 이동을 막습니다.
 */
const link = document.querySelector("#link");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("링크 이동을 막았습니다.");
});
