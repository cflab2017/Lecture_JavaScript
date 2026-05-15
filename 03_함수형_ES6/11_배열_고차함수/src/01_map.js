/**
 * map: 변환
 */
"use strict";

const nums = [1, 2, 3, 4];
const squares = nums.map((x) => x * x);
console.log(squares);

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
];
console.log(users.map((u) => u.name));
