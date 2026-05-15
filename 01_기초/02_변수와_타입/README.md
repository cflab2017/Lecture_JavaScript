# 02. 변수와 타입

> 단계: 기초 | 선수: 01_JS_시작하기

## 학습 목표
- `let`, `const`, `var` 의 차이를 설명하고 올바르게 선택할 수 있다.
- JavaScript 의 7 가지 원시 타입을 구분할 수 있다.
- 명시적/암묵적 타입 변환의 결과를 예측할 수 있다.
- truthy / falsy 값을 구분하고 조건식에서 활용할 수 있다.
- `typeof` 연산자로 값의 타입을 확인할 수 있다.

## 1. 변수 선언: const, let, var
`const` 는 재할당 불가, `let` 은 재할당 가능, `var` 는 함수 스코프와 호이스팅 문제로 현대 코드에서는 사용하지 않습니다. 기본은 `const`, 값이 바뀔 때만 `let` 을 씁니다.

```js
const PI = 3.14;
let count = 0;
count += 1;
```

## 2. 원시 타입 (Primitive types)
JavaScript 에는 `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` 의 7 가지 원시 타입이 있습니다. 객체와 달리 값 자체로 비교/복사됩니다.

```js
typeof "hi";        // "string"
typeof 42;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object"  ← 역사적 버그
```

## 3. 타입 변환 (Type coercion)
명시적 변환은 `Number()`, `String()`, `Boolean()` 으로, 암묵적 변환은 `+`, `==` 등 연산자가 자동으로 수행합니다. 의도하지 않은 변환이 버그의 원인이 되므로 명시적 변환을 권장합니다.

```js
Number("42");   // 42
String(42);     // "42"
"5" + 1;        // "51"  (문자열 연결)
"5" - 1;        // 4     (숫자 변환)
```

## 4. truthy / falsy
조건식에서 falsy 로 평가되는 값은 `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` 7 가지뿐입니다. 그 외는 모두 truthy 입니다.

```js
if ("") console.log("실행 안 됨");
if ("0") console.log("실행 됨 - 비어 있지 않은 문자열");
```

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_let_const.js` | const 와 let 의 재할당/스코프 차이 |
| `02_primitives.js` | 7 가지 원시 타입과 `typeof` |
| `03_conversion.js` | 명시적/암묵적 타입 변환 비교 |
| `04_truthy_falsy.js` | 조건식에서의 truthy/falsy 동작 |

## ⚠️ 자주 하는 실수
1. `const` 로 선언한 객체의 속성을 바꿀 수 없다고 오해 (재할당이 안 될 뿐, 내부 변경은 가능).
2. `typeof null === "object"` 인 줄 모르고 null 체크를 잘못 하는 것.
3. `parseInt("10px")` 가 `10` 인 것은 알지만 `Number("10px")` 이 `NaN` 인 것을 혼동.
4. `"" == false`, `0 == false` 같은 `==` 의 함정. (가능하면 `===` 사용)
5. `let` 으로 충분한데 `var` 를 사용해 호이스팅 버그를 만드는 경우.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. 항상 const 를 먼저 써야 하나요?** A. 네. 재할당이 필요할 때만 let 으로 바꾸세요. 의도가 명확해집니다.

**Q2. `null` 과 `undefined` 의 차이는?** A. `undefined` 는 "값이 할당된 적 없음", `null` 은 "의도적으로 비어 있음" 을 나타냅니다.

**Q3. BigInt 는 언제 쓰나요?** A. `Number.MAX_SAFE_INTEGER (2^53 - 1)` 를 넘는 정수가 필요할 때 사용합니다. 일반 산술에는 불필요합니다.

## 📝 과제 (homework/)
- `homework_01.js` — 다양한 값에 대해 `typeof` 결과를 출력하기.
- `homework_02.js` — 사용자 입력(상수)을 받아 숫자로 변환하고 짝/홀수를 판별하기.

## 다음 단원
[03_연산자와_표현식](../03_연산자와_표현식/) — 값을 계산하고 비교하는 도구를 배웁니다.
