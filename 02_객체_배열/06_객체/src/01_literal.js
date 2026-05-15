/**
 * 객체 리터럴 기본
 */
"use strict";

const book = {
  title: "JS 입문",
  pages: 320,
  author: "kim",
};

console.log("book =", book);

// 속성 추가
book.published = 2024;
console.log("after add =", book);

// 속성 삭제
delete book.author;
console.log("after delete =", book);
