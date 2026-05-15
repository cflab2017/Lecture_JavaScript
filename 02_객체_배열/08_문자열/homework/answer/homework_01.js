/**
 * 과제 1: 단어 수 세기
 */
"use strict";

/**
 * @param {string} s
 * @returns {number}
 */
function wordCount(s) {
  const trimmed = s.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}

console.log(wordCount("  hello world  js  ")); // 3
console.log(wordCount(""));                     // 0
