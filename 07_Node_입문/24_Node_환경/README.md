# 24. Node.js 환경 입문

> 단계: 심화 | 선수: 23_모듈_ESM

## 학습 목표
- Node로 JS 파일을 실행할 수 있다.
- `process.argv`, `process.env`를 활용한다.
- `fs` 모듈로 파일을 읽고 쓸 수 있다.
- CommonJS와 ESM 모듈 시스템의 차이를 안다.

## 1. Node란?
브라우저 밖에서 JS를 실행하는 런타임. 서버, CLI, 빌드 도구 등에 쓰입니다.

설치 확인:
```bash
node -v
```

실행:
```bash
node 01_hello_node.js
```

## 2. process — 인자와 환경변수
```js
console.log(process.argv);   // ['node 경로', '스크립트 경로', ...추가 인자]
console.log(process.env.HOME);
```

```bash
node 02_process.js apple 5
```

## 3. fs — 파일 시스템
```js
import { readFileSync, writeFileSync } from 'node:fs';

writeFileSync('hello.txt', '안녕 Node');
const text = readFileSync('hello.txt', 'utf-8');
console.log(text);
```

비동기 버전(`readFile`, `promises` API)도 있습니다.

## 4. CommonJS vs ESM
Node에는 두 모듈 시스템이 공존합니다.

| 항목 | CommonJS | ESM |
|------|----------|------|
| 파일 확장자 | `.js` (기본) | `.mjs` 또는 `"type":"module"` |
| 내보내기 | `module.exports = ...` | `export` |
| 가져오기 | `require('./x')` | `import` |
| 로딩 | 동기 | 비동기 |

```js
// CommonJS (legacy.cjs)
module.exports = { hi: () => 'hi' };
const { hi } = require('./legacy');

// ESM (modern.mjs)
export const hi = () => 'hi';
import { hi } from './modern.mjs';
```

신규 코드는 ESM을 권장합니다.

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| 01_hello_node.js | node 실행 첫 걸음 |
| 02_process.js | argv / env 사용 |
| 03_fs_basic.js | 파일 읽기/쓰기 |
| 04_commonjs_esm.mjs | 두 모듈 시스템 비교 |

## ⚠️ 자주 하는 실수
1. 브라우저 API(`window`, `document`)를 Node에서 사용.
2. ESM에서 `require` 사용 (반대도 마찬가지).
3. 상대경로에 `./`를 빼먹기.
4. `fs.writeFileSync`로 만든 파일이 다른 작업 디렉토리에 생성된 줄 모르고 못 찾음.
5. 환경변수를 코드에 하드코딩.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. Node 버전 어떤 걸 써야?** A. LTS(짝수 메이저) 최신을 권장합니다.
**Q2. .env 파일은?** A. Node 20+은 `--env-file`, 그 외는 `dotenv` 패키지.
**Q3. 작업 디렉토리는?** A. `process.cwd()`로 확인. 보통 명령을 실행한 위치입니다.

## 📝 과제 (homework/)
명령행 인자와 fs로 간단한 도구를 만드세요.

## 다음 단원
[25_npm_입문](../25_npm_입문/)
