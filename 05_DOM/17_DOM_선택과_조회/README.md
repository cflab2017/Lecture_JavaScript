# 17. DOM 선택과 조회

> 단계: 중급 | 선수: 16_async_await

## 학습 목표
- DOM 트리의 개념을 이해한다.
- `querySelector`, `querySelectorAll`, `getElementById` 로 요소를 선택한다.
- `getAttribute`, `dataset` 으로 속성을 읽는다.
- `textContent` 와 `innerHTML` 의 차이(특히 XSS)를 안다.
- 부모/자식/형제 노드를 탐색한다.

## 1. DOM 이란?
브라우저는 HTML 을 파싱해 DOM(Document Object Model) 트리를 만듭니다. 자바스크립트는 이 트리를 읽고 수정해 화면을 바꿉니다.

## 2. 요소 선택
```js
const title = document.querySelector("#title");           // 첫 매칭
const items = document.querySelectorAll(".item");         // NodeList
const byId = document.getElementById("title");
```

`querySelector` 는 CSS 선택자를 그대로 받습니다. `querySelectorAll` 은 정적인 NodeList 를 돌려주므로 forEach 가 가능합니다.

## 3. 속성 조회
```js
const link = document.querySelector("a");
link.getAttribute("href");
link.href;                  // DOM 프로퍼티
link.dataset.userId;        // data-user-id 속성
```

## 4. textContent vs innerHTML
`textContent` 는 단순 텍스트로 읽고/쓰기 때문에 안전합니다. `innerHTML` 은 HTML 문자열을 파싱하므로 사용자 입력을 그대로 넣으면 XSS 공격에 노출됩니다. 외부 입력은 항상 `textContent` 또는 sanitize 후 사용합니다.

## 5. 트리 탐색
```js
el.parentElement;
el.children;
el.firstElementChild;
el.nextElementSibling;
```

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| index.html | 예제용 HTML 페이지 |
| 01_query_selector.js | querySelector/All 사용 |
| 02_attributes.js | getAttribute / dataset |
| 03_text_html.js | textContent vs innerHTML |
| 04_nested.js | 부모/자식/형제 탐색 |

## ⚠️ 자주 하는 실수
1. 스크립트를 `<head>` 에서 로드해 DOM 이 아직 없는 상태에서 접근.
2. `querySelectorAll` 결과를 배열로 착각해 `.map` 직접 호출 (Array.from 필요).
3. `innerHTML` 에 사용자 입력을 그대로 삽입.
4. `getAttribute("class")` 와 `el.className` 의 미묘한 차이 무시.
5. id 가 같은 요소가 여러 개일 때의 동작에 의존.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. getElementById 와 querySelector("#id") 중 무엇이 좋나요?** A. 성능 차는 미미합니다. 일관성을 위해 querySelector 만 써도 됩니다.

**Q2. NodeList 와 HTMLCollection 의 차이?** A. NodeList 는 정적(또는 라이브), HTMLCollection 은 항상 라이브이며 forEach 가 없습니다.

**Q3. dataset 의 키 이름 규칙?** A. data-user-id 는 dataset.userId 로 카멜케이스 변환됩니다.

## 📝 과제 (homework/)
HTML 페이지에서 특정 클래스의 모든 항목을 선택해 목록을 콘솔에 출력하세요.

## 다음 단원
[18_DOM_조작](../18_DOM_조작/) — 요소 만들기/추가/삭제
