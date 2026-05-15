/**
 * 단축 표기와 계산된 속성명
 */
"use strict";

const name = "수진";
const age = 22;
const user = { name, age };
console.log("shorthand =", user);

const field = "score";
const value = 95;
const record = { [field]: value, [`${field}_max`]: 100 };
console.log("computed =", record);
