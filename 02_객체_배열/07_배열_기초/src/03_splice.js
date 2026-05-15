/**
 * splice vs slice
 */
"use strict";

const nums = [1, 2, 3, 4, 5];

const removed = nums.splice(1, 2, 99, 100);
console.log("after splice =", nums);
console.log("removed =", removed);

const copy = nums.slice(1, 4);
console.log("slice =", copy);
console.log("nums unchanged =", nums);
