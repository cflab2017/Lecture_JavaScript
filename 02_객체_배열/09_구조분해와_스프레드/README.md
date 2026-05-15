# 09. 구조분해와 스프레드

> 단계: 중급 | 선수: 08_문자열

## 학습 목표
- 객체와 배열에서 필요한 값만 변수로 꺼낼 수 있다.
- 기본값과 별칭(rename)을 사용할 수 있다.
- rest(`...`) 로 나머지를 묶는다.
- spread(`...`) 로 펼쳐서 합치거나 복사한다.
- 함수 매개변수에서 구조 분해를 활용한다.

## 1. 객체 구조 분해
객체에서 키 이름과 같은 이름의 변수에 값을 한 번에 꺼냅니다.

```js
const user = { id: 1, name: "민지", age: 21 };
const { name, age } = user;
const { id: userId } = user;        // 별칭
const { email = "none" } = user;    // 기본값
```

## 2. 배열 구조 분해
배열은 위치 기반으로 꺼냅니다.

```js
const [a, b, c] = [10, 20, 30];
const [first, , third] = [1, 2, 3]; // 두번째 생략
const [x = 0, y = 0] = [5];          // y = 0
```

## 3. rest 매개변수
나머지를 배열/객체로 모읍니다.

```js
const [head, ...tail] = [1, 2, 3, 4];  // head=1, tail=[2,3,4]
const { name, ...rest } = user;         // rest 는 name 제외 모두

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

## 4. spread
배열/객체를 펼쳐 결합하거나 얕은 복사합니다.

```js
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];          // [1,2,3,4]

const base = { x: 1, y: 2 };
const extended = { ...base, z: 3 };   // { x:1, y:2, z:3 }
```

객체 spread 에서 같은 키가 있으면 뒤쪽이 이깁니다.

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_object_destructure.js` | 객체 구조 분해 + 기본값 |
| `02_array_destructure.js` | 배열 구조 분해 + 스왑 |
| `03_rest.js` | rest 매개변수 |
| `04_spread.js` | 배열/객체 spread |

## ⚠️ 자주 하는 실수
1. `const { name, age } = undefined` → TypeError. 기본값으로 `= {}` 처리.
2. spread 는 **얕은 복사** 임을 잊는다 (중첩 객체는 참조 공유).
3. rest 는 항상 마지막에 와야 한다.
4. 객체 분해 시 별칭 문법 `key: alias` 를 type 표기로 오해.
5. 배열 분해에서 위치를 잘못 세어 변수가 어긋난다.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. spread 와 Object.assign 차이?** A. 결과는 거의 같지만 spread 가 더 간결하고 새 객체를 반환합니다.

**Q2. 배열 깊은 복사는?** A. `structuredClone(arr)` 또는 JSON 우회를 사용합니다.

**Q3. 함수 인자로 구조 분해는 언제 좋나요?** A. 옵션 객체가 많을 때 가독성이 좋아집니다.

## 📝 과제 (homework/)
- `homework_01.js` — 사용자 객체에서 필요한 필드를 구조 분해로 추출하세요.
- `homework_02.js` — 두 객체를 spread 로 병합하고 충돌 키는 두 번째가 이기게 하세요.

## 다음 단원
[10_화살표함수](../../03_함수형_ES6/10_화살표함수/) — ES6 함수 표현.
