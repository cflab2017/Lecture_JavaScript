/**
 * 정규식 기초
 */
"use strict";

const text = "주문번호 A1234, 수량 56, 가격 7800";

const digits = text.match(/\d+/g);
console.log("digits =", digits);

const masked = text.replace(/\d/g, "*");
console.log("masked =", masked);

const isEmail = /^[\w.-]+@[\w-]+\.[a-z]+$/i;
console.log("email? =", isEmail.test("user@example.com"));
