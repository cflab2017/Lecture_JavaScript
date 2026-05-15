/**
 * 과제 2: 다크모드 토글 + localStorage 저장
 */
const KEY = 'theme';
const btn = document.getElementById('toggle');

if (localStorage.getItem(KEY) === 'dark') {
  document.body.classList.add('dark');
}

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem(KEY, mode);
});
