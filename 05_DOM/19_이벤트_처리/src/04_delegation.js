/**
 * 부모 한 곳에서 자식 클릭을 처리(이벤트 위임).
 */
const menu = document.querySelector("#menu");
menu.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li || !menu.contains(li)) return;
  console.log("선택:", li.textContent);
});
