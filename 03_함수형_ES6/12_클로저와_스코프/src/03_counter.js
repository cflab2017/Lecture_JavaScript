/**
 * 비공개 상태 카운터
 */
"use strict";

function makeCounter(start = 0) {
  let count = start;
  return {
    inc() { return ++count; },
    dec() { return --count; },
    get() { return count; },
  };
}

const c = makeCounter(10);
c.inc();
c.inc();
c.dec();
console.log("count =", c.get()); // 11
