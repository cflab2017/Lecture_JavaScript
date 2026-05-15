/**
 * 메서드와 this
 */
"use strict";

const cart = {
  items: [],
  add(item) {
    this.items.push(item);
  },
  total() {
    return this.items.reduce((sum, x) => sum + x.price, 0);
  },
};

cart.add({ name: "사과", price: 1000 });
cart.add({ name: "빵", price: 2500 });
console.log("items =", cart.items);
console.log("total =", cart.total());
