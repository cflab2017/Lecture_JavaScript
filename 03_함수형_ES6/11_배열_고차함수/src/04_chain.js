/**
 * 체이닝
 */
"use strict";

const users = [
  { name: "A", age: 17, score: 80 },
  { name: "B", age: 22, score: 95 },
  { name: "C", age: 30, score: 60 },
  { name: "D", age: 25, score: 88 },
];

const avgAdultScore = users
  .filter((u) => u.age >= 18)
  .map((u) => u.score)
  .reduce((acc, s, _i, arr) => acc + s / arr.length, 0);

console.log("avg adult score =", avgAdultScore);
