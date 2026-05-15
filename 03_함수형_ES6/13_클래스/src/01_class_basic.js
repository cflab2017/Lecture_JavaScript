/**
 * 클래스 기본
 */
"use strict";

class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hi, I am ${this.name}`;
  }
}

const p = new Person("Yuna");
console.log(p.hello());
console.log(p instanceof Person);
