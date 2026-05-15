/**
 * 배열 구조 분해
 */
"use strict";

const [a, b, c] = [10, 20, 30];
console.log(a, b, c);

// 스왑
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log("swapped =", x, y);

const [first, , third = 99] = [100, 200];
console.log(first, third);
