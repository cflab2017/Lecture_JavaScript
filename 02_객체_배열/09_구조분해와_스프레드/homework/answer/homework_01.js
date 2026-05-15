/**
 * 과제 1: 구조 분해 + 기본값
 */
"use strict";

const user = { id: 7, name: "지수", age: 27 };
const { name, age, email = "none" } = user;
console.log(name, age, email);
