/**
 * spread 연산자
 */
"use strict";

const a = [1, 2];
const b = [3, 4];
console.log([...a, ...b]);

const base = { x: 1, y: 2 };
const merged = { ...base, z: 3, x: 99 };
console.log(merged); // { x:99, y:2, z:3 }

// 얕은 복사
const copy = [...a];
copy.push(999);
console.log("original =", a, "copy =", copy);
