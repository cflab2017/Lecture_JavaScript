/**
 * sessionStorage — 탭이 닫히면 사라짐
 */
sessionStorage.setItem('step', '1');
console.log(sessionStorage.getItem('step'));

sessionStorage.setItem('cart', JSON.stringify([
  { id: 1, qty: 2 },
  { id: 5, qty: 1 },
]));

const cart = JSON.parse(sessionStorage.getItem('cart'));
console.log('총 개수:', cart.reduce((s, i) => s + i.qty, 0));
