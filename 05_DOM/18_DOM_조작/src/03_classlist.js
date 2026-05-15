/**
 * classList 로 클래스 추가/제거/토글.
 */
const title = document.querySelector("#title");
title.classList.add("active");

const btn = document.querySelector("#btn");
btn.classList.toggle("hidden");
console.log("btn hidden?", btn.classList.contains("hidden"));
btn.classList.toggle("hidden"); // 원복
