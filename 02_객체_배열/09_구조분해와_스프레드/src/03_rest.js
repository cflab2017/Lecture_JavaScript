/**
 * rest 매개변수와 rest 분해
 */
"use strict";

/**
 * @param {...number} nums
 */
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

const [head, ...tail] = [1, 2, 3, 4];
console.log("head =", head, "tail =", tail);

const { name, ...others } = { name: "Lee", age: 20, city: "Seoul" };
console.log("name =", name, "others =", others);
