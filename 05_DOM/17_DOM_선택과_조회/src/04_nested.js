/**
 * 부모/자식/형제 노드 탐색.
 */
const list = document.querySelector("#list");
console.log("자식 수:", list.children.length);
console.log("첫 자식:", list.firstElementChild.textContent);
console.log("두 번째 자식:", list.firstElementChild.nextElementSibling.textContent);
console.log("부모 태그:", list.parentElement.tagName);
