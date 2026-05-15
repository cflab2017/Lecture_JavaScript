/**
 * 과제 1: 최댓값/최솟값
 */
"use strict";

/**
 * @param {number[]} arr
 * @returns {{min:number,max:number}}
 */
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const x of arr) {
    if (x < min) min = x;
    if (x > max) max = x;
  }
  return { min, max };
}

console.log(minMax([3, 1, 4, 1, 5, 9, 2, 6])); // { min: 1, max: 9 }
