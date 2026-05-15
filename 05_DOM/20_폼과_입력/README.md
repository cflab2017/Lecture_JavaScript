# 20. 폼과 입력

> 단계: 중급 | 선수: 19_이벤트_처리

## 학습 목표
- input/change/submit 이벤트의 차이를 안다.
- HTML5 내장 검증(required, type, pattern) 을 사용한다.
- `FormData` 로 폼 데이터를 한 번에 수집한다.
- 자바스크립트로 입력값을 제어(controlled)하고 검증한다.
- 제출 시 `preventDefault` 후 fetch 등으로 전송하는 패턴을 익힌다.

## 1. input vs change vs submit
- `input`: 값이 바뀔 때마다 (텍스트 입력 중 매 키)
- `change`: 포커스가 벗어나며 값이 바뀌었을 때 (text), 또는 선택이 바뀐 즉시 (select/checkbox)
- `submit`: 폼이 제출될 때 (form 요소)

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 데이터 처리
});
```

## 2. HTML5 검증
```html
<input type="email" required minlength="3" />
```

브라우저가 자동으로 검증해 줍니다. `form.checkValidity()`, 요소의 `validity` 객체로 자바스크립트에서도 검사할 수 있습니다.

## 3. FormData
```js
const data = new FormData(form);
data.get("email");
for (const [k, v] of data) console.log(k, v);
```

`FormData` 는 파일을 포함한 전송에도 사용됩니다.

## 4. controlled 입력
입력값을 자바스크립트가 항상 가지고 있고 화면에도 그대로 반영하는 패턴.

```js
input.addEventListener("input", (e) => {
  state.value = e.target.value.toUpperCase();
  input.value = state.value;
});
```

## 5. 제출 패턴
```js
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  // 다음 단원에서 배울 fetch 로 전송
});
```

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| index.html | 예제 폼 |
| 01_input_submit.js | input/submit 이벤트 |
| 02_validation.js | HTML5 검증 활용 |
| 03_formdata.js | FormData 사용 |
| 04_controlled.js | 자바스크립트가 값 통제 |

## ⚠️ 자주 하는 실수
1. `submit` 에서 `preventDefault` 를 잊어 페이지가 새로고침.
2. `e.target.value` 대신 `e.value` 로 접근.
3. checkbox 의 값은 `.checked`, 텍스트는 `.value` 라는 점을 혼동.
4. FormData 사용 시 input 에 `name` 속성을 빼먹음.
5. 비밀번호 일치 등 도메인 검증을 HTML5 만으로 처리하려 함.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. checkValidity 와 reportValidity 차이?** A. checkValidity 는 검사만, reportValidity 는 실패 시 사용자에게 메시지를 띄웁니다.

**Q2. controlled 입력이 항상 좋은가요?** A. 매 키마다 렌더링 비용이 있을 수 있으니 필요할 때만 사용합니다.

**Q3. file input 도 FormData 로 전송 가능?** A. 가능하고 `multipart/form-data` 로 자동 인코딩됩니다.

## 📝 과제 (homework/)
이메일과 비밀번호 입력 폼을 만들고, 제출 시 FormData 로 값을 콘솔에 출력하세요. 비어 있으면 막습니다.

## 다음 단원
[21_Fetch와_JSON](../../06_브라우저_API/21_Fetch와_JSON/) — 서버와 데이터 주고받기
