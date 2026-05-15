# 25. npm 입문

> 단계: 심화 | 선수: 24_Node_환경

## 학습 목표
- `package.json`의 역할을 이해한다.
- `npm init`, `npm install`, `npm run`을 사용한다.
- 외부 패키지를 설치해 활용한다.
- `bin` 필드로 간단한 CLI를 만든다.

## 1. package.json
프로젝트의 명함이자 설정 파일. 의존성, 스크립트, 메타정보를 담습니다.

```bash
npm init -y
```

최소 형태:
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module"
}
```

`"type": "module"`을 추가하면 `.js`도 ESM으로 동작합니다.

## 2. scripts
자주 쓰는 명령을 별칭으로 등록합니다.
```json
{
  "scripts": {
    "start": "node index.js",
    "hello": "node -e \"console.log('hi')\""
  }
}
```
실행:
```bash
npm start
npm run hello
```
`start`, `test` 등은 `run` 없이 실행됩니다.

## 3. dependencies
```bash
npm install chalk@5
```
`node_modules/`에 설치되고 `package.json`의 `dependencies`에 추가됩니다.

```js
import chalk from 'chalk';
console.log(chalk.green('성공!'));
```

개발용 도구는 `--save-dev` (또는 `-D`).

## 4. CLI 만들기 (`bin`)
```json
{
  "bin": { "greet": "./bin/greet.js" }
}
```
`bin/greet.js` 첫 줄에 shebang:
```js
#!/usr/bin/env node
console.log('hi', process.argv[2] ?? 'world');
```
`npm link` 후 터미널에서 `greet 홍길동` 가능.

## 핵심 예제 (src/)
| 폴더 | 다루는 내용 |
|------|------------|
| 01_init/ | 최소 package.json |
| 02_scripts/ | npm scripts |
| 03_dependency/ | 외부 패키지(chalk) |
| 04_cli/ | bin 필드로 CLI 만들기 |

각 폴더에서 `npm install` 후 실행합니다.

## ⚠️ 자주 하는 실수
1. `node_modules`를 git에 커밋.
2. `package-lock.json`을 무시 — 버전 고정 보장이 깨짐.
3. `^`, `~` 의미 혼동 (`^5.0.0`은 5.x 허용).
4. ESM에서 `"type":"module"` 누락 → `import` SyntaxError.
5. CLI shebang `#!/usr/bin/env node`를 빼먹어 직접 실행 불가.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. yarn/pnpm은?** A. 대체 패키지 매니저. 기본은 npm으로 익히면 됩니다.
**Q2. 전역 설치는 언제?** A. CLI 도구 정도. 프로젝트 의존성은 로컬 설치.
**Q3. 의존성을 지우려면?** A. `npm uninstall <패키지>`.

## 📝 과제 (homework/)
이름을 입력받아 인사하는 CLI를 만드세요.

## 🎉 강의를 완주했습니다!

25편을 모두 마쳤다면 이제 다음을 시도해 볼 수 있습니다:

- TypeScript 입문 — JS에 타입 시스템 추가
- React/Vue 등 프레임워크
- Node.js 심화 (Express, 데이터베이스 연결)
- 빌드 도구 (Vite, esbuild)

수고하셨습니다!
