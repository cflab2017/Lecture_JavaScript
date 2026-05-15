# 16. async / await

> 단계: 중급 | 선수: 15_Promise

## 학습 목표
- `async` 함수가 항상 Promise 를 반환함을 안다.
- `await` 로 Promise 의 값을 동기처럼 받아낼 수 있다.
- `try/catch` 로 비동기 에러를 처리한다.
- 병렬 실행과 순차 실행의 차이를 안다.
- `Promise.all` 과 `await` 을 조합하여 효율적으로 처리한다.

## 1. async 함수
`async` 키워드가 붙은 함수는 반환값이 자동으로 Promise 로 감쌉니다.

```js
async function f() {
  return 42;
}
f().then((v) => console.log(v)); // 42
```

## 2. await
`await` 는 Promise 가 결정될 때까지 함수 실행을 일시정지합니다. `async` 함수 내부에서만 쓸 수 있습니다(최상위 모듈 제외).

```js
async function main() {
  const value = await Promise.resolve(10);
  console.log(value); // 10
}
```

## 3. try / catch
비동기 에러는 try/catch 로 잡습니다.

```js
async function load() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## 4. 병렬 vs 순차
연속된 `await` 은 앞 작업이 끝나야 다음이 시작되므로 느립니다. 독립적인 작업은 `Promise.all` 로 병렬화하세요.

```js
// 느림 (순차)
const a = await fetchA();
const b = await fetchB();

// 빠름 (병렬)
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| 01_async_basic.js | async 함수와 await 기본 |
| 02_try_catch.js | try/catch 로 에러 처리 |
| 03_promise_all.js | await + Promise.all |
| 04_parallel.js | 병렬 vs 순차 시간 비교 |

## ⚠️ 자주 하는 실수
1. `async` 가 아닌 함수에서 `await` 사용 → SyntaxError.
2. 독립적인 작업을 연속 `await` 으로 작성하여 시간 낭비.
3. `try/catch` 없이 await 하여 unhandled rejection.
4. `forEach((x) => await ...)` 는 동작하지 않음(콜백이 async 가 아님).
5. async 함수의 반환값을 then 으로 풀지 않고 그대로 사용.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. await 을 모듈 최상위에서 사용할 수 있나요?** A. ES2022 의 top-level await(ESM 한정)에서 가능합니다.

**Q2. async 함수가 throw 하면?** A. 반환된 Promise 가 rejected 상태가 됩니다.

**Q3. await 와 .then 중 무엇이 좋은가요?** A. 가독성은 보통 await 가 좋습니다. 분기/조합이 단순할 땐 .then 도 충분합니다.

## 📝 과제 (homework/)
1. async 함수로 사용자와 게시글을 차례대로 가져오기.
2. 여러 URL 을 Promise.all 로 병렬 호출 시뮬레이션.

## 다음 단원
[17_DOM_선택과_조회](../../05_DOM/17_DOM_선택과_조회/) — 브라우저에서 HTML 요소 다루기
