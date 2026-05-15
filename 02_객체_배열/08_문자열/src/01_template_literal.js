/**
 * 템플릿 리터럴
 */
"use strict";

const name = "지호";
const score = 92;

const msg = `이름: ${name}
점수: ${score}
등급: ${score >= 90 ? "A" : "B"}`;

console.log(msg);
