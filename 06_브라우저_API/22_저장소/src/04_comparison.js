/**
 * 세 저장소 비교 데모
 */
localStorage.setItem('demo', 'L');
sessionStorage.setItem('demo', 'S');
document.cookie = 'demo=C; path=/';

console.log('local:', localStorage.getItem('demo'));    // 영구
console.log('session:', sessionStorage.getItem('demo')); // 탭 한정
console.log('cookie:', document.cookie);                 // 서버로 전송
