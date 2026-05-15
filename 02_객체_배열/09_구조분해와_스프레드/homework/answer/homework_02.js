/**
 * 과제 2: spread 병합
 */
"use strict";

/**
 * @param {object} a
 * @param {object} b
 */
function merge(a, b) {
  return { ...a, ...b };
}

console.log(merge({ x: 1, y: 2 }, { y: 99, z: 3 })); // { x:1, y:99, z:3 }
