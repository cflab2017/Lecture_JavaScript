/**
 * GET 요청으로 JSON 데이터 받기
 */
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => res.json())
  .then((user) => {
    console.log('이름:', user.name);
    console.log('이메일:', user.email);
  });
