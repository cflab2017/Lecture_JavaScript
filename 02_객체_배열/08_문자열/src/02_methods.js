/**
 * 자주 쓰는 문자열 메서드
 */
"use strict";

const raw = "   Hello, World!   ";
console.log("trim =", `[${raw.trim()}]`);
console.log("upper =", raw.trim().toUpperCase());
console.log("replace =", "banana".replace("a", "A"));
console.log("replaceAll =", "banana".replaceAll("a", "A"));
console.log("includes =", "javascript".includes("script"));
console.log("startsWith =", "javascript".startsWith("java"));
