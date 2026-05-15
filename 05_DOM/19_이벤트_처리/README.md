# 19. 이벤트 처리

> 단계: 중급 | 선수: 18_DOM_조작

## 학습 목표
- `addEventListener` 로 이벤트 핸들러를 등록/해제한다.
- 이벤트 객체에서 target, type 등을 읽는다.
- `preventDefault` 와 `stopPropagation` 을 구분한다.
- 이벤트 위임(delegation) 을 활용해 많은 핸들러를 줄인다.
- 캡처/버블 단계의 개념을 안다.

## 1. addEventListener
```js
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);
```

같은 함수 참조를 넘겨야 제거가 가능합니다. 익명 함수는 제거할 수 없습니다.

## 2. 이벤트 객체
콜백은 `Event` 객체를 받습니다.
- `event.target`: 실제로 이벤트가 발생한 요소
- `event.currentTarget`: 리스너가 붙은 요소
- `event.type`: "click", "input" 등
- `event.key`, `event.code`: 키보드 이벤트

## 3. preventDefault / stopPropagation
- `preventDefault()`: 기본 동작(폼 제출, 링크 이동 등)을 막음.
- `stopPropagation()`: 이벤트가 부모로 전파되는 것을 막음.

## 4. 이벤트 위임
자식이 많을 때 각각 등록하지 말고 부모 한 곳에서 처리합니다.

```js
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  console.log("클릭된 항목:", li.textContent);
});
```

## 5. 캡처와 버블
이벤트는 window → 대상 → 부모로 전파됩니다(캡처 → 버블). 기본은 버블 단계에서 호출되며 `addEventListener(type, fn, { capture: true })` 로 캡처 단계 등록도 가능합니다.

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| index.html | 예제 HTML |
| 01_addeventlistener.js | 이벤트 등록/해제 |
| 02_event_object.js | 이벤트 객체 속성 |
| 03_prevent_default.js | preventDefault 사용 |
| 04_delegation.js | 이벤트 위임 |

## ⚠️ 자주 하는 실수
1. `onclick = fn` 으로 한 번에 한 핸들러만 등록 가능한 문제.
2. 익명 함수를 등록 후 제거 시도.
3. `event.target` 과 `event.currentTarget` 혼동.
4. 폼의 submit 에서 `preventDefault` 잊어 페이지가 새로고침.
5. 동적으로 추가된 자식에 이벤트가 없어 위임 필요한 상황을 못 봄.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. once 옵션은?** A. `{ once: true }` 로 한 번만 실행 후 자동 해제됩니다.

**Q2. passive 리스너는?** A. 스크롤 성능을 위해 `{ passive: true }` 로 등록하면 preventDefault 호출이 무시됩니다.

**Q3. 이벤트 전파를 막는 건 항상 좋나요?** A. 다른 핸들러를 깨뜨릴 수 있으므로 꼭 필요한 경우만.

## 📝 과제 (homework/)
목록에서 어떤 항목을 클릭해도 클릭된 텍스트를 출력하는 위임형 핸들러를 만드세요.

## 다음 단원
[20_폼과_입력](../20_폼과_입력/) — 폼 제어와 검증
