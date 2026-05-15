/**
 * 입력값을 받아 목록에 항목을 추가합니다.
 */
const input = document.querySelector("#text");
const addBtn = document.querySelector("#add");
const todos = document.querySelector("#todos");

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;
  const li = document.createElement("li");
  li.textContent = value;
  todos.appendChild(li);
  input.value = "";
  input.focus();
});
