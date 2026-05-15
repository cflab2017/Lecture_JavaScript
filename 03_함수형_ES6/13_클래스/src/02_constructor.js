/**
 * constructor 와 인스턴스 필드
 */
"use strict";

class Book {
  // 클래스 필드
  likes = 0;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  like() {
    this.likes += 1;
  }
}

const b = new Book("JS", "Kim");
b.like();
b.like();
console.log(b);
