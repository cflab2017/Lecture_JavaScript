/**
 * static 과 getter/setter
 */
"use strict";

class MathX {
  static square(x) { return x * x; }
}
console.log(MathX.square(6));

class Temp {
  constructor(c) { this._c = c; }
  get fahrenheit() { return this._c * 9 / 5 + 32; }
  set fahrenheit(f) { this._c = (f - 32) * 5 / 9; }
  get celsius() { return this._c; }
}

const t = new Temp(0);
console.log("F =", t.fahrenheit); // 32
t.fahrenheit = 212;
console.log("C =", t.celsius);    // 100
