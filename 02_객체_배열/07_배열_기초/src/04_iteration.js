/**
 * 배열 순회 방법
 */
"use strict";

const items = ["a", "b", "c"];

for (let i = 0; i < items.length; i++) {
  console.log("for:", i, items[i]);
}

for (const x of items) {
  console.log("for...of:", x);
}

items.forEach((x, i) => console.log("forEach:", i, x));
