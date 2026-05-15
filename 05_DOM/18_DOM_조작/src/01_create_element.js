/**
 * createElement 로 새 요소를 만들어 목록에 추가합니다.
 */
const list = document.querySelector("#list");
const li = document.createElement("li");
li.textContent = "새 항목 (createElement)";
list.appendChild(li);
