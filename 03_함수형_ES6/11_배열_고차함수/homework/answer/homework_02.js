/**
 * 과제 2: 카테고리별 총액
 */
"use strict";

const products = [
  { name: "사과", category: "과일", price: 1000 },
  { name: "바나나", category: "과일", price: 1500 },
  { name: "우유", category: "유제품", price: 2500 },
];

const totals = products.reduce((g, p) => {
  g[p.category] = (g[p.category] ?? 0) + p.price;
  return g;
}, {});

console.log(totals); // { 과일: 2500, 유제품: 2500 }
