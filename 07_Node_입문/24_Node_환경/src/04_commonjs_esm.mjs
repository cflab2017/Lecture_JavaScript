/**
 * ESM 스타일 — .mjs 확장자
 * CommonJS와 비교 주석 포함
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// CommonJS에서는 __filename, __dirname이 기본 제공되지만
// ESM에서는 직접 만들어야 한다
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('이 파일:', __filename);
console.log('이 디렉토리:', __dirname);

// CommonJS:
//   const { readFileSync } = require('node:fs');
//   module.exports = { ... };
//
// ESM:
//   import { readFileSync } from 'node:fs';
//   export { ... };

export const hello = () => 'ESM에서 안녕';
console.log(hello());
