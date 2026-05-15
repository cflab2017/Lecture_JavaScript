/**
 * 화살표 함수 기본 문법
 */
"use strict";

const add = (a, b) => a + b;
const square = (x) => x * x;
const noArg = () => 42;

console.log(add(2, 3));
console.log(square(5));
console.log(noArg());

const greet = (name) => {
  const msg = `Hi, ${name}`;
  return msg;
};
console.log(greet("Sun"));
