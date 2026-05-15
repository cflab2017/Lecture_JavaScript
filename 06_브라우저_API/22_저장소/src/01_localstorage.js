/**
 * localStorage 기본 — 브라우저 콘솔에서 실행
 */
localStorage.setItem('username', '홍길동');
console.log(localStorage.getItem('username'));

const user = { id: 1, name: '이순신' };
localStorage.setItem('user', JSON.stringify(user));
const restored = JSON.parse(localStorage.getItem('user'));
console.log(restored.name);

localStorage.removeItem('username');
// localStorage.clear();  // 전체 삭제
