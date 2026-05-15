/**
 * 과제 2: 버튼 클릭 시 게시글 1개 표시
 */
document.getElementById('load').addEventListener('click', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!res.ok) {
    alert(`HTTP ${res.status}`);
    return;
  }
  const post = await res.json();
  const box = document.getElementById('result');
  box.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.textContent = post.title;
  const p = document.createElement('p');
  p.textContent = post.body;
  box.append(h2, p);
});
