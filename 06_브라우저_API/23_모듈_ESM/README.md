# 23. 모듈 (ESM)

> 단계: 심화 | 선수: 22_저장소

## 학습 목표
- ES Modules의 `import`/`export`를 사용할 수 있다.
- named export와 default export를 구분한다.
- `<script type="module">`로 브라우저에서 모듈을 로드한다.
- re-export로 모듈을 묶어 제공한다.

## 1. 왜 모듈인가
한 파일에 모든 코드를 넣으면 충돌과 유지보수가 어렵습니다. 모듈은 파일별로 스코프를 격리하고 필요한 것만 노출합니다.

## 2. export — named / default
```js
// math.mjs
export const PI = 3.14159;
export function add(a, b) { return a + b; }

export default function multiply(a, b) { return a * b; }
```

named export는 이름 그대로, default는 한 모듈당 1개만 가능합니다.

## 3. import
```js
import multiply, { PI, add } from './math.mjs';
import * as math from './math.mjs';
import { add as plus } from './math.mjs';
```

default는 중괄호 없이, named는 중괄호 안에 적습니다.

## 4. 브라우저에서 사용
```html
<script type="module" src="./02_import.mjs"></script>
```
`type="module"`이 있어야 import 구문이 동작합니다. 모듈은 자동으로 `defer`되며 strict mode입니다.

## 5. re-export
한 진입점에서 여러 모듈을 묶어 제공할 때.
```js
// index.mjs
export { add, PI } from './math.mjs';
export { format } from './format.mjs';
```

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| 01_export.mjs | named & default export |
| 02_import.mjs | 01에서 import |
| 03_named_default.mjs | 두 방식 혼합 |
| 04_reexport.mjs | re-export 패턴 |
| index.html | `<script type="module">` |

`index.html`을 로컬 서버로 열어야 합니다 (`file://`은 CORS 문제).

## ⚠️ 자주 하는 실수
1. `type="module"` 빼먹어서 `import`가 SyntaxError.
2. default를 중괄호 `{ }`로 import.
3. 상대경로에 `./` 누락 → 베어 모듈로 오인.
4. 확장자 `.mjs`/`.js` 누락 (브라우저는 명시 필요).
5. `file://`로 직접 열기 — 로컬 서버를 사용.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. `.js`와 `.mjs` 차이?** A. Node에서 `.mjs`는 ESM, `.js`는 package.json의 `type`에 따름. 브라우저는 `type="module"`만 보면 둘 다 OK.
**Q2. CommonJS와 섞어 쓸 수 있나요?** A. Node에서 제한적으로 가능합니다. 24편에서 다룹니다.
**Q3. 동적 import도 있나요?** A. `await import('./x.mjs')`로 런타임 로드 가능합니다.

## 📝 과제 (homework/)
유틸 모듈을 만들어 HTML 페이지에서 사용하세요.

## 다음 단원
[24_Node_환경](../../07_Node_입문/24_Node_환경/)
