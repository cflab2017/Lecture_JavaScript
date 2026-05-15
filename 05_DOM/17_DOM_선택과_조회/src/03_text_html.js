/**
 * textContent 와 innerHTML 의 차이.
 * 사용자 입력을 innerHTML 에 그대로 넣으면 XSS 위험이 있습니다.
 */
const msg = document.querySelector("#msg");
console.log("textContent:", msg.textContent);
console.log("innerHTML:", msg.innerHTML);

msg.textContent = "<b>안전</b>";
console.log("이후 textContent:", msg.textContent);
