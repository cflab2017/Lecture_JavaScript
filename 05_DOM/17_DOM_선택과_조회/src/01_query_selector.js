/**
 * querySelector / querySelectorAll / getElementById 비교.
 */
const title = document.querySelector("#title");
console.log("title:", title.textContent);

const items = document.querySelectorAll(".item");
console.log("아이템 개수:", items.length);
items.forEach((el) => console.log("-", el.textContent));

const byId = document.getElementById("msg");
console.log("msg:", byId.textContent);
