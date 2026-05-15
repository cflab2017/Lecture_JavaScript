/**
 * 클로저 기본
 */
"use strict";

function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const hi = makeGreeter("Hi");
const hello = makeGreeter("Hello");
console.log(hi("Sun"));
console.log(hello("Moon"));
