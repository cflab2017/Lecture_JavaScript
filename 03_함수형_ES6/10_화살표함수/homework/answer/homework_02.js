/**
 * 과제 2: 좌표 생성기
 */
"use strict";

const makePoint = (x, y) => ({
  x,
  y,
  distance: Math.hypot(x, y),
});

console.log(makePoint(3, 4)); // { x:3, y:4, distance:5 }
