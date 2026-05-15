/**
 * 객체 구조 분해
 */
"use strict";

const user = { id: 1, name: "윤", age: 30, role: "admin" };

const { name, age } = user;
console.log(name, age);

const { id: userId, role: r } = user;
console.log(userId, r);

const { email = "unknown@example.com" } = user;
console.log("email =", email);
