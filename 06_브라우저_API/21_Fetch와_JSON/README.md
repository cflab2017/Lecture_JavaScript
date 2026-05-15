# 21. Fetch와 JSON

> 단계: 심화 | 선수: 20_비동기_기초

## 학습 목표
- `fetch()` API로 HTTP 요청을 보낼 수 있다.
- JSON 문자열과 객체를 변환할 수 있다.
- 네트워크 오류와 HTTP 오류를 구분해 처리할 수 있다.
- `async/await`로 fetch 코드를 간결하게 쓸 수 있다.

## 1. fetch란?
브라우저(그리고 Node 18+)에 내장된 HTTP 클라이언트입니다. Promise를 반환합니다.

```js
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => res.json())
  .then((user) => console.log(user.name));
```

`res.json()`은 응답 본문을 JSON으로 파싱해 다시 Promise를 반환합니다.

## 2. JSON.parse / JSON.stringify
JSON은 데이터 표현 문자열입니다. JS 객체와 변환할 때 사용합니다.

```js
const obj = { name: '이순신', age: 35 };
const str = JSON.stringify(obj);   // '{"name":"이순신","age":35}'
const back = JSON.parse(str);      // { name: '이순신', age: 35 }
```

## 3. POST 요청
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'hi', body: 'hello', userId: 1 }),
}).then((res) => res.json());
```

## 4. 에러 처리
`fetch`는 4xx/5xx를 reject하지 않습니다. `res.ok`를 직접 확인해야 합니다.

```js
fetch(url)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .catch((err) => console.error('실패:', err));
```

네트워크 단절은 reject 됩니다.

## 5. async/await 재작성
```js
async function loadUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| 01_get_json.js | GET 요청과 JSON 파싱 |
| 02_post_json.js | POST로 JSON 전송 |
| 03_error_handling.js | res.ok / try-catch |
| 04_async_await.js | async/await 재작성 |

## ⚠️ 자주 하는 실수
1. `res.json()` 호출을 잊고 응답 객체 자체를 사용하기.
2. 4xx 응답을 성공으로 오인 — `res.ok` 확인 누락.
3. POST에서 `Content-Type` 헤더를 빼먹기.
4. `body`에 객체를 그대로 넘기기 (반드시 `JSON.stringify`).
5. `await`를 `async` 함수 바깥에서 사용.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. fetch는 Node에서도 되나요?** A. Node 18부터 전역으로 사용 가능합니다.
**Q2. XMLHttpRequest는 더 안 쓰나요?** A. 호환이 필요한 경우만. 신규 코드는 fetch를 씁니다.
**Q3. CORS 오류는 왜?** A. 다른 출처의 서버가 허용해야 합니다. 서버 측 설정 문제입니다.

## 📝 과제 (homework/)
JSONPlaceholder에서 사용자/게시글을 받아 화면에 표시하세요.

## 다음 단원
[22_저장소](../22_저장소/)
