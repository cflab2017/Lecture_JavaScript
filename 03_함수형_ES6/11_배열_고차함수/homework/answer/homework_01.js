/**
 * 과제 1: 평균 점수
 */
"use strict";

const students = [
  { name: "A", score: 80 },
  { name: "B", score: 90 },
  { name: "C", score: 70 },
];

const avg = students.reduce((acc, s, _i, arr) => acc + s.score / arr.length, 0);
console.log("avg =", avg); // 80
