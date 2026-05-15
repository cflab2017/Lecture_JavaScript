# 12. 클로저와 스코프

> 단계: 중급 | 선수: 11_배열_고차함수

## 학습 목표
- 렉시컬 스코프(lexical scope) 의 의미를 설명한다.
- 클로저가 무엇인지, 언제 생성되는지 안다.
- 클로저로 비공개 상태(private state) 를 가진 카운터를 만든다.
- 모듈 패턴(IIFE) 으로 공개/비공개 멤버를 분리한다.
- 흔한 루프 변수 캡처 버그를 `let` 으로 해결한다.

## 1. 렉시컬 스코프
함수의 스코프는 **선언된 위치** 에 의해 정해집니다. 호출 위치가 아닙니다.

```js
const x = 1;
function outer() {
  const y = 2;
  function inner() {
    return x + y; // outer/전역 변수 참조
  }
  return inner;
}
```

## 2. 클로저
함수가 자신이 만들어진 환경(변수)을 기억하는 현상이 클로저입니다. `outer()` 가 반환된 뒤에도 `inner` 는 `y` 를 사용할 수 있습니다.

```js
const fn = outer();
fn(); // 3
```

## 3. 비공개 상태: 카운터
클로저로 외부에서 직접 접근할 수 없는 상태를 만들 수 있습니다.

```js
function makeCounter() {
  let count = 0;
  return {
    inc() { count += 1; return count; },
    get() { return count; },
  };
}
const c = makeCounter();
c.inc(); c.inc(); c.get(); // 2
```

## 4. 모듈 패턴 (IIFE)
즉시 실행 함수 표현식으로 한 번만 실행되는 스코프를 만들고, 공개할 멤버만 반환합니다.

```js
const Logger = (() => {
  let level = "info";
  function setLevel(l) { level = l; }
  function log(msg) { console.log(`[${level}] ${msg}`); }
  return { setLevel, log };
})();
```

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_scope.js` | 블록/함수 스코프, let/const/var |
| `02_closure.js` | 클로저 기본 |
| `03_counter.js` | 비공개 상태 카운터 |
| `04_module_pattern.js` | IIFE 모듈 패턴 |

## ⚠️ 자주 하는 실수
1. `var` 로 선언한 루프 변수를 setTimeout 콜백에서 잘못 캡처한다 → `let` 사용.
2. 클로저가 메모리를 잡고 있어 GC 가 안 됨을 잊는다 (대량 데이터 주의).
3. 클로저 변수를 외부에서 직접 바꾸려 한다 (불가능).
4. `function` 선언 호이스팅과 표현식 호이스팅 차이를 혼동.
5. 동일 이름의 외부 변수와 내부 변수 섀도잉으로 혼란.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. 클로저는 언제 만들어지나요?** A. 함수가 정의되는 순간 외부 환경을 참조하면 클로저가 만들어집니다.

**Q2. 클로저는 성능에 나쁜가요?** A. 일반적으로 무시할 수준입니다. 다만 큰 객체를 잡고 있으면 메모리 누수 가능.

**Q3. let 과 const 의 블록 스코프?** A. `{ }` 단위로 유효 범위가 제한됩니다.

## 📝 과제 (homework/)
- `homework_01.js` — `makeAdder(n)` 을 만들어 더하기 클로저를 반환하세요.
- `homework_02.js` — 비공개 잔액을 가진 `makeAccount` 를 작성하세요.

## 다음 단원
[13_클래스](../13_클래스/) — class 문법으로 OOP.
