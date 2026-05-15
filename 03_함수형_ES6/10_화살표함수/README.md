# 10. 화살표 함수

> 단계: 중급 | 선수: 09_구조분해와_스프레드

## 학습 목표
- 화살표 함수의 문법을 안다.
- 본문이 한 줄인 경우 암묵 반환(implicit return) 을 활용한다.
- `function` 과 화살표의 `this` 차이를 설명할 수 있다.
- 콜백으로 화살표 함수를 자연스럽게 사용한다.
- 화살표 함수가 적절하지 않은 경우(메서드, 생성자)를 안다.

## 1. 기본 문법
```js
const add = (a, b) => a + b;
const square = x => x * x;          // 매개변수 1개면 괄호 생략 가능
const log = () => console.log("hi"); // 인자 없음 → 빈 괄호
```

본문이 여러 줄이면 중괄호와 `return` 을 명시합니다.

```js
const greet = (name) => {
  const msg = `안녕, ${name}`;
  return msg;
};
```

## 2. 객체를 암묵 반환
객체 리터럴은 함수 본문 블록과 모양이 같아서 괄호로 감싸야 합니다.

```js
const make = (x, y) => ({ x, y });
```

## 3. this 차이
일반 `function` 의 `this` 는 호출 방식에 따라 결정되지만, 화살표 함수는 **선언된 위치의 this** 를 그대로 사용합니다 (lexical this).

```js
const obj = {
  name: "A",
  hello1: function () { return this.name; },
  hello2: () => this?.name,
};
obj.hello1(); // "A"
obj.hello2(); // undefined (선언 시점의 this)
```

따라서 객체의 메서드는 보통 `function` 이나 단축 메서드 문법을 쓰고, 콜백처럼 외부 this 를 유지하고 싶을 때는 화살표를 씁니다.

## 4. 콜백에 적합
```js
[1, 2, 3].map((x) => x * 10); // [10, 20, 30]
setTimeout(() => console.log("done"), 100);
```

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_basic.js` | 기본 문법, 매개변수 형태 |
| `02_implicit_return.js` | 암묵 반환, 객체 반환 |
| `03_this_diff.js` | this 차이 비교 |
| `04_callbacks.js` | 배열 메서드 콜백 |

## ⚠️ 자주 하는 실수
1. 객체 반환 시 괄호를 빼서 블록으로 해석되어 `undefined` 반환.
2. 화살표 함수를 객체 메서드로 정의하고 `this` 가 없다고 당황.
3. 화살표 함수는 `arguments` 객체가 없다는 점을 잊는다.
4. 화살표 함수는 생성자(`new`) 로 호출할 수 없다.
5. 한 줄 함수에 `return` 까지 적어 SyntaxError.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. 화살표 함수를 항상 써도 되나요?** A. 메서드와 프로토타입 정의는 `function` 이 더 적합합니다.

**Q2. arguments 가 필요하면?** A. rest 매개변수(`...args`) 를 쓰세요.

**Q3. 익명 함수와 차이는?** A. 화살표도 익명이며, 변수에 할당해 이름을 부여합니다. 다만 `name` 속성은 변수명으로 추론됩니다.

## 📝 과제 (homework/)
- `homework_01.js` — `function` 으로 짠 코드를 화살표로 변환하세요.
- `homework_02.js` — 객체 반환 화살표 함수로 좌표 생성기를 만드세요.

## 다음 단원
[11_배열_고차함수](../11_배열_고차함수/) — map/filter/reduce.
