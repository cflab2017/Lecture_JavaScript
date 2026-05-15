# 01. JS 시작하기

> 단계: 기초 | 선수: 없음 (프로그래밍 입문자 환영)

## 학습 목표
- JavaScript 가 어떤 환경에서 실행되는지(브라우저, Node.js) 이해한다.
- `console.log` 로 값을 출력하고 결과를 확인할 수 있다.
- HTML 에 `<script>` 태그로 JS 를 연결할 수 있다.
- 브라우저 개발자 도구(DevTools) 의 Console 탭을 사용할 수 있다.
- `"use strict"` 모드의 의미와 효과를 설명할 수 있다.

## 1. JavaScript 실행 환경
JavaScript 는 원래 브라우저에서 동작하는 언어로 시작했지만, 지금은 Node.js 덕분에 서버, CLI, 빌드 도구 등 거의 모든 곳에서 사용됩니다. 같은 코드라도 실행 환경에 따라 사용 가능한 API 가 다릅니다 (예: 브라우저는 `window`, Node 는 `process`).

```js
console.log("Hello, JavaScript!");
```

위 한 줄은 브라우저 Console 과 Node `node file.js` 모두에서 동일하게 동작합니다.

## 2. 스크립트 연결과 실행 순서
HTML 에서 JS 를 실행하려면 `<script>` 태그를 사용합니다. `defer` 속성을 붙이면 HTML 파싱이 끝난 뒤 실행되어 DOM 접근이 안전합니다.

```html
<script src="src/01_console.js" defer></script>
```

Node 환경에서는 터미널에서 `node src/01_console.js` 로 실행합니다.

## 3. 개발자 도구와 디버깅 기초
브라우저에서 F12 (또는 Cmd+Option+I) 를 누르면 DevTools 가 열립니다. Console 탭에서 즉시 JS 표현식을 평가할 수 있고, Sources 탭에서는 코드에 중단점을 걸 수 있습니다. `console.log`, `console.table`, `console.error` 를 상황에 맞게 사용하면 디버깅이 훨씬 쉬워집니다.

## 4. 엄격 모드 (strict mode)
파일 상단에 `"use strict";` 를 적으면 흔한 실수(선언하지 않은 변수에 값 할당 등)를 에러로 알려줍니다. ES 모듈(`type="module"`) 은 자동으로 strict 입니다.

```js
"use strict";
x = 10; // ReferenceError: x is not defined
```

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_console.js` | 다양한 `console` 메서드 출력 비교 |
| `02_script_tag.js` | HTML 에서 로드되어 DOM 에 메시지 출력 |
| `03_devtools.js` | DevTools 에서 활용하는 디버깅 패턴 |
| `04_strict_mode.js` | strict 모드의 효과 확인 |

## ⚠️ 자주 하는 실수
1. `console.log` 의 `l` 을 대문자로 쓰는 경우 (`console.Log` 는 에러).
2. `<script>` 를 `<head>` 에 그냥 넣어 DOM 이 아직 없을 때 접근하려는 경우 → `defer` 사용.
3. 세미콜론 없이 줄을 이어 써서 ASI(자동 세미콜론 삽입) 가 잘못 동작하는 경우.
4. Node 실행 파일에서 `alert`, `document` 같은 브라우저 전용 API 호출.
5. 파일을 저장하지 않고 브라우저를 새로고침해 변경 사항이 반영되지 않은 줄 모르는 경우.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. Node 와 브라우저 중 어디서 연습하면 좋나요?** A. 입출력만 다루는 동안은 `node` 가 빠르고 편합니다. DOM 단원부터는 브라우저가 필수입니다.

**Q2. `console.log` 외에 어떤 것을 자주 쓰나요?** A. `console.table` (배열/객체 표), `console.error` (빨간 출력), `console.time/timeEnd` (성능 측정) 가 유용합니다.

**Q3. strict 모드를 꼭 써야 하나요?** A. 새 코드는 ES 모듈로 쓰는 게 일반적이므로 자동으로 strict 입니다. 명시적으로 적으면 의도를 분명히 할 수 있습니다.

## 📝 과제 (homework/)
- `homework_01.js` — 자기소개 문자열 3 줄을 서로 다른 console 메서드로 출력하기.
- `homework_02.html` — 외부 JS 를 `defer` 로 연결하고 페이지에 메시지를 표시하는 페이지 만들기.

## 다음 단원
[02_변수와_타입](../02_변수와_타입/) — 데이터를 담는 그릇과 자료형을 배웁니다.
