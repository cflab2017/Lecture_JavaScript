# 15. Promise

> 단계: 중급 | 선수: 14_콜백과_타이머

## 학습 목표
- Promise 의 세 가지 상태(pending, fulfilled, rejected)를 안다.
- `new Promise` 로 직접 Promise 를 생성할 수 있다.
- `then`, `catch`, `finally` 로 결과를 처리한다.
- 체이닝으로 콜백 지옥을 평탄화할 수 있다.
- `Promise.all`, `Promise.race` 의 차이를 안다.

## 1. Promise 란?
Promise 는 "미래의 어느 시점에 완료될 작업의 결과를 담는 상자"입니다. 세 가지 상태가 있습니다.
- pending: 아직 끝나지 않음
- fulfilled: 성공, 값이 있음
- rejected: 실패, 이유(에러)가 있음

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100);
});
```

`resolve` 를 호출하면 fulfilled, `reject` 를 호출하면 rejected 가 됩니다. 한 번 정해진 상태는 바뀌지 않습니다.

## 2. then / catch / finally
```js
p.then((value) => console.log(value))
 .catch((err) => console.error(err))
 .finally(() => console.log("끝"));
```

`then` 의 콜백에서 반환한 값은 다음 `then` 의 인자로 들어갑니다. 에러가 발생하면 가까운 `catch` 가 잡습니다.

## 3. 체이닝
콜백 지옥 예제를 Promise 로 다시 쓰면 평탄해집니다.

```js
step("1").then(() => step("2")).then(() => step("3"));
```

`then` 안에서 Promise 를 반환하면 그것이 완료될 때까지 다음 `then` 이 기다립니다.

## 4. Promise.all / Promise.race
- `Promise.all([p1, p2, ...])`: 모두 성공해야 성공, 하나라도 실패하면 실패. 결과는 배열.
- `Promise.race([p1, p2, ...])`: 가장 먼저 결정(성공/실패)된 결과를 채택.
- `Promise.allSettled`: 모두 끝날 때까지 기다리고, 각각의 상태 객체 배열을 돌려줌.

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| 01_new_promise.js | new Promise 로 직접 만들기 |
| 02_then_catch.js | then/catch/finally 사용 |
| 03_chaining.js | 체이닝으로 순차 실행 |
| 04_all_race.js | Promise.all / Promise.race |

## ⚠️ 자주 하는 실수
1. `then` 에서 값을 반환하지 않아 다음 `then` 에서 undefined 를 받음.
2. `catch` 없이 사용해 unhandled rejection 발생.
3. `Promise.all` 에 하나라도 실패하면 전체 실패라는 점을 잊음.
4. `new Promise` 안에서 throw 한 에러는 자동으로 reject 가 됨을 모름.
5. Promise 가 즉시 실행됨을 모르고 "lazy" 라고 생각.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. resolve/reject 는 즉시 호출해도 되나요?** A. 됩니다. 그래도 then 콜백은 비동기로 실행됩니다.

**Q2. catch 와 then 의 두 번째 인자 차이?** A. then(onFul, onRej) 의 onRej 는 같은 then 의 onFul 에서 던진 에러는 잡지 못합니다. catch 가 더 안전합니다.

**Q3. Promise 안에 Promise 를 반환하면?** A. 자동으로 풀려서 then 다음 단계로 값이 전달됩니다.

## 📝 과제 (homework/)
1. setTimeout 기반 `delay(ms)` Promise 함수.
2. Promise.all 로 여러 작업을 병렬 실행하는 코드.

## 다음 단원
[16_async_await](../16_async_await/) — Promise 를 더 쉽게 쓰는 문법
