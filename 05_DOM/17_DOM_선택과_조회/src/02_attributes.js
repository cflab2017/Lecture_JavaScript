/**
 * 속성과 dataset 읽기.
 */
const link = document.querySelector("#link");
console.log("href(attr):", link.getAttribute("href"));
console.log("href(prop):", link.href);

document.querySelectorAll(".item").forEach((el) => {
  console.log("id =", el.dataset.id, ", text =", el.textContent);
});
