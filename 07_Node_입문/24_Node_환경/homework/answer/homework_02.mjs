/**
 * 과제 2: note.txt에 메모 추가 (ESM)
 * 실행: node homework_02.mjs "오늘의 메모"
 */
import { appendFileSync, readFileSync, existsSync } from 'node:fs';

const text = process.argv[2];
if (!text) {
  console.error('추가할 문자열을 인자로 주세요.');
  process.exit(1);
}

const path = 'note.txt';
appendFileSync(path, text + '\n');

console.log('--- 현재 note.txt ---');
console.log(existsSync(path) ? readFileSync(path, 'utf-8') : '(없음)');
