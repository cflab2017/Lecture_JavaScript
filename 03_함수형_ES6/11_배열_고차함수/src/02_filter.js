/**
 * filter, find
 */
"use strict";

const nums = [1, 2, 3, 4, 5, 6];
console.log("evens =", nums.filter((x) => x % 2 === 0));

const users = [
  { id: 1, active: false },
  { id: 2, active: true },
  { id: 3, active: true },
];
console.log("first active =", users.find((u) => u.active));
console.log("actives =", users.filter((u) => u.active));
