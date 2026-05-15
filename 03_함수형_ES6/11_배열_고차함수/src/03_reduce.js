/**
 * reduce: 합계, 그룹화
 */
"use strict";

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, x) => acc + x, 0);
console.log("sum =", sum);

const words = ["js", "go", "rust", "py", "c"];
const byLen = words.reduce((g, w) => {
  (g[w.length] ??= []).push(w);
  return g;
}, {});
console.log("byLen =", byLen);
