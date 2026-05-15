/**
 * 스코프
 */
"use strict";

const g = "global";

function outer() {
  const o = "outer";
  if (true) {
    const b = "block";
    console.log(g, o, b);
  }
  // console.log(b); // ReferenceError
}

outer();

// let 은 블록 스코프
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("i =", i), 0);
}
