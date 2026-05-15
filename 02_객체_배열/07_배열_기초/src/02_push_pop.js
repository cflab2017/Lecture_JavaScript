/**
 * 추가/삭제 메서드
 */
"use strict";

const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log("after push =", stack);

const top = stack.pop();
console.log("pop =", top, "now =", stack);

const q = [1, 2, 3];
q.unshift(0);
console.log("unshift =", q);
const first = q.shift();
console.log("shift =", first, "now =", q);
