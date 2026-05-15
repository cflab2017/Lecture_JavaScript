/**
 * 점 표기법과 대괄호 표기법
 */
"use strict";

const product = {
  id: 1,
  name: "노트북",
  "price-krw": 1500000,
};

console.log(product.name);
console.log(product["price-krw"]);

const key = "id";
console.log("dynamic key =", product[key]);

// 존재하지 않는 키
console.log("missing =", product.brand); // undefined
