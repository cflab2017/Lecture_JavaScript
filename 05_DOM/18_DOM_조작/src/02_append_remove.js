/**
 * append/prepend/remove 사용.
 */
const list = document.querySelector("#list");

list.append("문자열 노드", document.createElement("hr"));

const first = document.createElement("li");
first.textContent = "맨 앞 항목";
list.prepend(first);

// 일정 시간 후 첫 항목 제거
setTimeout(() => {
  first.remove();
  console.log("첫 항목 제거됨");
}, 1000);
