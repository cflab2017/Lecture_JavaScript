/**
 * 과제 2: 점수 누적
 */
"use strict";

const scores = {};

/**
 * @param {string} subject
 * @param {number} point
 */
function addScore(subject, point) {
  scores[subject] = (scores[subject] ?? 0) + point;
}

addScore("math", 80);
addScore("eng", 70);
addScore("math", 10);
console.log(scores); // { math: 90, eng: 70 }
