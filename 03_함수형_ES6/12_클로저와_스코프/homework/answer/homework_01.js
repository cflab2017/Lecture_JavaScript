/**
 * 과제 1: makeAdder
 */
"use strict";

/**
 * @param {number} n
 */
function makeAdder(n) {
  return (x) => x + n;
}

const add5 = makeAdder(5);
console.log(add5(3));  // 8
console.log(add5(10)); // 15
