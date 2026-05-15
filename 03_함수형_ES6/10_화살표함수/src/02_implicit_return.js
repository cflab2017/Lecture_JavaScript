/**
 * 암묵 반환과 객체 반환
 */
"use strict";

const double = (x) => x * 2;
console.log(double(7));

// 객체 반환은 괄호 필수
const point = (x, y) => ({ x, y });
console.log(point(1, 2));

// 잘못된 예 (블록으로 해석)
const wrong = (x, y) => { x, y };
console.log("wrong =", wrong(1, 2)); // undefined
