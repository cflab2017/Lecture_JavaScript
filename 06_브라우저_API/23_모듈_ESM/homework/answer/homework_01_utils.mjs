/**
 * 가격을 천단위 콤마와 '원'으로 포맷
 */
export function formatPrice(n) {
  return `${n.toLocaleString('ko-KR')}원`;
}

/**
 * 할인가 계산
 */
export function discount(price, percent) {
  return Math.floor(price * (1 - percent / 100));
}
