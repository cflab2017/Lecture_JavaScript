/**
 * POST 요청으로 JSON 보내기
 */
const newPost = {
  title: '안녕 fetch',
  body: '본문 내용',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newPost),
})
  .then((res) => res.json())
  .then((created) => console.log('생성됨:', created));
