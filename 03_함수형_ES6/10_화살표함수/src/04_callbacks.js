/**
 * 배열 콜백으로서 화살표 함수
 */
"use strict";

const nums = [1, 2, 3, 4, 5];

console.log(nums.map((x) => x * x));
console.log(nums.filter((x) => x % 2 === 0));
console.log(nums.reduce((a, b) => a + b, 0));

setTimeout(() => console.log("delayed log"), 10);
