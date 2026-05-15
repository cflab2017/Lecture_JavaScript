/**
 * 과제 2: Rectangle
 */
"use strict";

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
  static from(side) {
    return new Rectangle(side, side);
  }
}

const r = new Rectangle(4, 5);
console.log("area =", r.area);

const sq = Rectangle.from(7);
console.log("sq area =", sq.area);
