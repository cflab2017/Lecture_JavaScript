/**
 * this 차이
 */
"use strict";

const obj = {
  name: "ObjA",
  fn() {
    return this.name;
  },
  arrow: () => {
    // lexical this = 모듈/전역
    return typeof this === "undefined" ? "undefined" : "global";
  },
};

console.log("fn =", obj.fn());
console.log("arrow =", obj.arrow());

// 콜백에서 외부 this 유지가 필요한 경우 화살표가 유리
const timer = {
  seconds: 0,
  start() {
    const tick = () => {
      this.seconds += 1;
    };
    tick();
    tick();
    return this.seconds;
  },
};
console.log("timer =", timer.start()); // 2
