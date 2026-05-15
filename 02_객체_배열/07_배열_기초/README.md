# 07. 배열 기초

> 단계: 중급 | 선수: 06_객체

## 학습 목표
- 배열을 생성하고 인덱스로 접근/수정할 수 있다.
- `length` 의 의미와 동작을 이해한다.
- `push`, `pop`, `shift`, `unshift` 로 요소를 추가/삭제할 수 있다.
- `splice`, `slice` 의 차이(원본 변경 여부)를 안다.
- `for...of` 로 배열을 순회한다.

## 1. 배열 생성과 인덱스
배열은 순서가 있는 값의 모음이며, 0 부터 시작하는 인덱스로 접근합니다.

```js
const fruits = ["사과", "바나나", "포도"];
console.log(fruits[0]);      // "사과"
console.log(fruits.length);  // 3
fruits[1] = "딸기";
```

`length` 는 가장 큰 인덱스 + 1 입니다. `fruits.length = 1` 처럼 줄이면 뒤쪽 요소가 잘립니다.

## 2. 끝/앞 추가와 제거
`push/pop` 은 끝에서, `unshift/shift` 는 앞에서 동작합니다. 앞쪽 연산은 모든 요소를 이동시키므로 더 느립니다.

```js
const arr = [1, 2, 3];
arr.push(4);     // [1, 2, 3, 4]
arr.pop();       // [1, 2, 3]
arr.unshift(0);  // [0, 1, 2, 3]
arr.shift();     // [1, 2, 3]
```

## 3. splice 와 slice
`splice(start, deleteCount, ...items)` 는 원본을 변경하고, `slice(start, end)` 는 새 배열을 반환합니다(end 는 미포함).

```js
const nums = [1, 2, 3, 4, 5];
const removed = nums.splice(1, 2, 99); // nums = [1, 99, 4, 5], removed = [2,3]
const copy = nums.slice(1, 3);          // [99, 4]  원본 그대로
```

## 4. 순회 (for...of)
인덱스가 필요 없다면 `for...of` 가 가장 간결합니다. 인덱스도 필요하면 `entries()` 를 같이 씁니다.

```js
for (const item of fruits) console.log(item);
for (const [i, item] of fruits.entries()) console.log(i, item);
```

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_index.js` | 인덱스 접근, length 동작 |
| `02_push_pop.js` | 추가/삭제 메서드 |
| `03_splice.js` | splice vs slice |
| `04_iteration.js` | for, for...of, forEach |

## ⚠️ 자주 하는 실수
1. 존재하지 않는 인덱스를 읽고 `undefined` 에 메서드를 호출해 TypeError 발생.
2. `splice` 가 원본을 바꾼다는 사실을 잊고 두 번 적용한다.
3. 배열을 `===` 로 비교하려 한다 (참조 비교).
4. `delete arr[1]` 을 사용해 빈 슬롯(hole)을 만든다 — `splice` 를 사용하세요.
5. 객체나 배열을 복사할 때 얕은 복사임을 인지하지 못한다.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. 배열도 객체인가요?** A. 네. `typeof []` 는 `"object"` 이며, 정확히 판별하려면 `Array.isArray()` 를 씁니다.

**Q2. 빈 배열 검사는?** A. `arr.length === 0` 가 안전합니다.

**Q3. 배열을 복사하려면?** A. `arr.slice()`, `[...arr]`, `Array.from(arr)` 모두 얕은 복사를 합니다.

## 📝 과제 (homework/)
- `homework_01.js` — 정수 배열에서 최댓값과 최솟값을 구하세요.
- `homework_02.js` — 배열에서 특정 값을 모두 제거한 새 배열을 반환하세요.

## 다음 단원
[08_문자열](../08_문자열/) — 텍스트 다루기.
