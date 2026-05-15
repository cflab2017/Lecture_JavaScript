/**
 * 과제 2: 주민번호 마스킹
 */
"use strict";

/**
 * @param {string} rrn
 * @returns {string}
 */
function mask(rrn) {
  return rrn.replace(/-\d{7}$/, "-*******");
}

console.log(mask("000101-1234567")); // 000101-*******
