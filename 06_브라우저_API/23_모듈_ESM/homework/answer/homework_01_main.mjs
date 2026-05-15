/**
 * utils 모듈을 사용해 화면에 표시
 */
import { formatPrice, discount } from './homework_01_utils.mjs';

const price = 25000;
const sale = discount(price, 20);

const out = document.getElementById('out');
out.innerHTML = `
  <p>정가: ${formatPrice(price)}</p>
  <p>할인가(20%): ${formatPrice(sale)}</p>
`;
