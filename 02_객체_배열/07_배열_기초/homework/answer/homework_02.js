/**
 * 과제 2: 값 제거 (원본 보존)
 */
"use strict";

/**
 * @template T
 * @param {T[]} arr
 * @param {T} target
 * @returns {T[]}
 */
function removeAll(arr, target) {
  const result = [];
  for (const x of arr) {
    if (x !== target) result.push(x);
  }
  return result;
}

const original = [1, 2, 3, 2, 4, 2];
console.log(removeAll(original, 2)); // [1, 3, 4]
console.log("original =", original);
