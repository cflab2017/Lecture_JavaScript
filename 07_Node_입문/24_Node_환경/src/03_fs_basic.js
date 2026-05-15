/**
 * fs로 텍스트 파일 쓰고 읽기
 */
const { writeFileSync, readFileSync, existsSync } = require('node:fs');

const path = 'hello.txt';
writeFileSync(path, '안녕 Node\n두 번째 줄');

if (existsSync(path)) {
  const text = readFileSync(path, 'utf-8');
  console.log('파일 내용:');
  console.log(text);
}
