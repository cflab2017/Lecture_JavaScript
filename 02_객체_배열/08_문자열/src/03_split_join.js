/**
 * split 과 join
 */
"use strict";

const csv = "apple,banana,grape";
const parts = csv.split(",");
console.log("split =", parts);

const joined = parts.join(" / ");
console.log("join =", joined);

const sentence = "I love javascript";
const words = sentence.split(" ");
const reversed = words.reverse().join(" ");
console.log("reversed =", reversed);
