/**
 * 위임으로 목록 클릭을 한 곳에서 처리합니다.
 */
const list = document.querySelector("#list");
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li || !list.contains(li)) return;
  console.log("클릭:", li.textContent);
});
