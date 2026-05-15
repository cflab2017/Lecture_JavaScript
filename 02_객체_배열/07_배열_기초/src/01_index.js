/**
 * 인덱스 접근과 length
 */
"use strict";

const colors = ["red", "green", "blue"];
console.log(colors[0], colors[2]);
console.log("length =", colors.length);

colors[3] = "yellow";
console.log("after add =", colors);

colors.length = 2;
console.log("truncated =", colors);
