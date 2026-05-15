/**
 * .fruit 요소들의 텍스트와 색상 속성을 출력합니다.
 */
const fruits = document.querySelectorAll(".fruit");
fruits.forEach((el) => {
  console.log(`${el.textContent} -> ${el.dataset.color}`);
});
