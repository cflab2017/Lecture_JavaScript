/**
 * addEventListener / removeEventListener 사용.
 */
const btn = document.querySelector("#btn");

function onClick() {
  console.log("버튼 클릭됨");
}

btn.addEventListener("click", onClick);

// 한 번만 실행되는 리스너
btn.addEventListener("click", () => console.log("한 번만!"), { once: true });
