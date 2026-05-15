/**
 * 쿠키 개요 — document.cookie로 모든 쿠키를 한 문자열로 받음
 */
console.log('현재 쿠키:', document.cookie);

// 설정 (만료 1일, 모든 경로)
const oneDay = 60 * 60 * 24;
document.cookie = `lang=ko; max-age=${oneDay}; path=/`;

// 파싱 예시
const cookies = Object.fromEntries(
  document.cookie.split('; ').filter(Boolean).map((c) => c.split('=')),
);
console.log(cookies);
