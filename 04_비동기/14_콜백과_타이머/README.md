# 14. 콜백과 타이머

> 단계: 중급 | 선수: 13_고차함수

## 학습 목표
- 동기와 비동기의 차이를 이해한다.
- `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval` 을 사용한다.
- 이벤트 루프의 개념을 큰 그림으로 이해한다.
- 콜백 지옥이 왜 문제인지 인지하고 다음 단원(Promise)의 필요성을 느낀다.
- 타이머 ID를 관리하여 리소스 누수를 방지한다.

## 1. 동기 vs 비동기
동기 코드는 한 줄씩 차례로 실행되며 한 작업이 끝나야 다음으로 넘어갑니다. 비동기 코드는 "나중에 실행될 일"을 예약하고 즉시 다음 코드로 넘어갑니다.

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// 출력: A, C, B
```

`setTimeout(fn, 0)` 조차 동기 코드가 모두 끝난 뒤에 실행됩니다.

## 2. setTimeout 과 clearTimeout
`setTimeout(fn, ms)` 은 지정한 밀리초 후에 콜백을 한 번 실행합니다. 반환값은 타이머 ID이며, `clearTimeout(id)` 로 취소할 수 있습니다.

```js
const id = setTimeout(() => console.log("실행되지 않음"), 1000);
clearTimeout(id);
```

`ms` 는 "최소 대기 시간"이지 "정확한 시간"이 아닙니다. 메인 스레드가 바쁘면 더 늦게 실행됩니다.

## 3. setInterval 과 clearInterval
`setInterval(fn, ms)` 은 일정 간격으로 콜백을 반복합니다. 반드시 더 이상 필요 없을 때 `clearInterval` 로 정리해야 합니다.

```js
let n = 0;
const id = setInterval(() => {
  n += 1;
  if (n >= 3) clearInterval(id);
  console.log(n);
}, 500);
```

## 4. 이벤트 루프 (큰 그림)
자바스크립트는 싱글 스레드이지만, 호스트 환경(브라우저/Node)이 제공하는 타이머/네트워크 API는 별도로 동작합니다. 콜백은 큐에 쌓였다가 호출 스택이 비었을 때 하나씩 실행됩니다. 자세한 내용은 16단원 이후에서 더 다룹니다.

## 5. 콜백 지옥
비동기 작업이 연달아 필요하면 콜백 안에 콜백을 또 넣게 되어 들여쓰기가 깊어집니다.

```js
step1((a) => {
  step2(a, (b) => {
    step3(b, (c) => {
      console.log(c);
    });
  });
});
```

이 문제를 풀기 위해 15단원에서 `Promise` 를, 16단원에서 `async/await` 을 배웁니다.

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| 01_settimeout.js | setTimeout/clearTimeout 기본 |
| 02_setinterval.js | setInterval 로 반복 + 종료 조건 |
| 03_event_loop.js | 동기/비동기 실행 순서 관찰 |
| 04_callback_hell.js | 콜백 중첩의 문제 시연 |

## ⚠️ 자주 하는 실수
1. `setTimeout(fn(), 1000)` 처럼 함수를 즉시 호출(괄호)해 결과값을 전달.
2. `setInterval` 을 만들고 `clearInterval` 을 잊어버려 누수 발생.
3. `setTimeout(fn, 0)` 이 즉시 실행될 거라고 기대.
4. 비동기 콜백 안에서 throw 한 에러를 바깥 try/catch 로 잡으려고 시도.
5. 콜백 내부에서 `this` 가 외부와 다른 것을 모르고 사용 (화살표 함수로 해결).

## ❓ 자주 묻는 질문 (FAQ)
**Q1. setTimeout 0ms 와 즉시 실행의 차이는?** A. 0ms 도 한 번 큐를 거치므로 현재 동기 코드가 모두 끝난 뒤 실행됩니다.

**Q2. setInterval 과 재귀 setTimeout 차이?** A. setInterval 은 콜백 실행 시간과 상관없이 간격을 유지하려 하고, 재귀 setTimeout 은 콜백 종료 후 다음 타이머를 설정합니다.

**Q3. 브라우저와 Node 의 타이머가 같은가요?** A. API 시그니처는 같지만 최소 지연 시간, 우선순위 큐 등 세부 사항이 다릅니다.

## 📝 과제 (homework/)
1. 1초마다 카운트다운하는 함수를 작성하세요.
2. 콜백 3개를 순차 실행하는 코드를 작성하세요.

## 다음 단원
[15_Promise](../15_Promise/) — 콜백 지옥을 해결하는 Promise 패턴
