# 11. 배열 고차함수

> 단계: 중급 | 선수: 10_화살표함수

## 학습 목표
- `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every` 를 구분해서 쓴다.
- 콜백의 매개변수 (요소, 인덱스, 배열) 를 안다.
- 메서드 체이닝으로 데이터 파이프라인을 만든다.
- 원본을 변경하지 않는 함수형 스타일을 선호한다.
- 적절한 초기값으로 `reduce` 를 안전하게 사용한다.

## 1. forEach 와 map
`forEach` 는 부수효과(로그, DOM 조작 등)에 쓰고 반환값이 없습니다. `map` 은 새 배열을 반환합니다.

```js
[1, 2, 3].forEach((x) => console.log(x));
const doubled = [1, 2, 3].map((x) => x * 2); // [2,4,6]
```

## 2. filter, find, some, every
조건을 만족하는 요소를 골라냅니다.

```js
[1,2,3,4].filter((x) => x % 2 === 0); // [2,4]
[1,2,3].find((x) => x > 1);            // 2 (첫 매치)
[1,2,3].some((x) => x > 2);            // true
[1,2,3].every((x) => x > 0);           // true
```

## 3. reduce
배열을 하나의 값으로 접습니다. 초기값을 명시하는 습관을 들이세요.

```js
const sum = [1,2,3,4].reduce((acc, x) => acc + x, 0);
const byLen = ["a","bb","ccc"].reduce((g, w) => {
  (g[w.length] ??= []).push(w);
  return g;
}, {});
```

## 4. 체이닝
함수형 파이프라인은 가독성이 뛰어납니다.

```js
const users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 30 },
];
const result = users
  .filter((u) => u.age >= 18)
  .map((u) => u.name)
  .join(", ");
```

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_map.js` | map 으로 변환 |
| `02_filter.js` | filter / find |
| `03_reduce.js` | 합계, 그룹핑 |
| `04_chain.js` | filter → map → reduce 체인 |

## ⚠️ 자주 하는 실수
1. `reduce` 초기값 없이 호출했다가 빈 배열에서 TypeError.
2. `map` 안에서 부수효과만 쓰고 반환값을 버린다 (`forEach` 가 적합).
3. `filter` 가 boolean 이 아닌 truthy/falsy 도 통과시키는 것을 잊는다.
4. 체이닝이 길어지면 성능 걱정 → 보통은 가독성이 우선.
5. 콜백에서 `return` 누락으로 `undefined` 배열 생성.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. for 루프와 성능 차이?** A. 대부분 무시할 만한 차이입니다. 가독성이 우선.

**Q2. `flat`, `flatMap` 은?** A. 중첩 배열을 펼치고 변환과 평탄화를 한 번에 합니다.

**Q3. `map` 으로 비동기 작업은?** A. 결과가 Promise 배열이 되므로 `Promise.all(arr.map(...))` 패턴을 씁니다.

## 📝 과제 (homework/)
- `homework_01.js` — 학생 배열에서 평균 점수를 reduce 로 계산하세요.
- `homework_02.js` — 상품 배열에서 카테고리별 총액을 구하세요.

## 다음 단원
[12_클로저와_스코프](../12_클로저와_스코프/) — 함수와 상태.
