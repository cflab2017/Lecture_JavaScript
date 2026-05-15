# 04. 제어문

> 단계: 기초 | 선수: 03_연산자와_표현식

## 학습 목표
- `if / else if / else` 로 조건을 분기할 수 있다.
- `switch` 문과 그 함정(`break` 누락) 을 이해한다.
- `for`, `while`, `for...of`, `for...in` 의 차이를 구분한다.
- `break` 와 `continue` 로 반복 흐름을 제어할 수 있다.
- 삼항 연산자로 간단한 조건 표현식을 작성할 수 있다.

## 1. 조건 분기 if / else
조건은 truthy/falsy 로 평가됩니다. 분기가 3 개 이상으로 길어지면 `switch` 또는 데이터(객체 매핑)로 바꾸는 것을 고려합니다.

```js
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else grade = "C";
```

## 2. switch
값이 정확히 일치하는 `case` 로 분기합니다. 각 `case` 끝에 `break` 를 빠뜨리면 다음 `case` 로 흘러내려갑니다(fallthrough). 의도적 fallthrough 는 주석으로 명시하세요.

```js
switch (day) {
  case "Sat":
  case "Sun":
    console.log("주말");
    break;
  default:
    console.log("평일");
}
```

## 3. 반복문
- `for (let i = 0; i < n; i++)` — 인덱스가 필요할 때.
- `while (cond)` — 종료 조건만 명확할 때.
- `for...of` — 배열, 문자열 같은 iterable 값 순회.
- `for...in` — 객체의 키 순회 (배열엔 비권장).

```js
for (const ch of "JS") console.log(ch);
for (const key in { a: 1, b: 2 }) console.log(key);
```

## 4. break / continue / 삼항
`break` 는 루프를 즉시 종료, `continue` 는 현재 회차를 건너뜁니다. 조건에 따라 값을 정할 때는 삼항 연산자가 간결합니다.

```js
const label = age >= 18 ? "성인" : "미성년";
```

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_if_else.js` | 점수에 따른 등급 분기 + 삼항 |
| `02_switch.js` | switch fallthrough 와 그룹 case |
| `03_for_loops.js` | for, while, for...of, for...in 비교 |
| `04_break_continue.js` | 짝수 건너뛰기와 조기 종료 |

## ⚠️ 자주 하는 실수
1. `switch` 의 각 `case` 끝에 `break` 를 누락해 의도치 않은 fallthrough 발생.
2. `for (var i ...)` 와 비동기 콜백을 함께 써서 `i` 가 공유되어 버그가 나는 경우 (`let` 사용).
3. 배열에 `for...in` 을 사용해 인덱스가 문자열로 나오거나 순서가 보장되지 않는 문제.
4. 무한 루프 작성 후 종료 조건 변경을 빠뜨림.
5. 삼항을 너무 중첩해 가독성이 떨어지는 코드.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. `for` 와 `forEach` 중 무엇을 쓸까요?** A. 중간에 `break` 가 필요하면 `for/for...of`. 단순 순회만이라면 `forEach` 도 좋습니다.

**Q2. `switch` 는 항상 피해야 하나요?** A. 분기가 명확히 값 기반이면 가독성이 좋습니다. 분기가 복잡해지면 객체 매핑으로 바꾸세요.

**Q3. `continue` 는 코드 흐름을 헷갈리게 만들지 않나요?** A. 가드 절(guard clause)로 깊은 중첩을 줄일 때는 오히려 가독성을 높여 줍니다.

## 📝 과제 (homework/)
- `homework_01.js` — FizzBuzz (1~30 출력, 3 의 배수 Fizz, 5 의 배수 Buzz, 둘 다 FizzBuzz).
- `homework_02.js` — 점수 배열을 받아 등급 분포를 객체로 집계.

## 다음 단원
[05_함수_기초](../05_함수_기초/) — 코드를 재사용 가능한 단위로 묶습니다.
