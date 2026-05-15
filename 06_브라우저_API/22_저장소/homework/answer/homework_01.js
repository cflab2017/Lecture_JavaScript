/**
 * 과제 1: localStorage 메모장
 */
const KEY = 'memo:text';
const memo = document.getElementById('memo');

memo.value = localStorage.getItem(KEY) ?? '';
memo.addEventListener('input', () => {
  localStorage.setItem(KEY, memo.value);
});
