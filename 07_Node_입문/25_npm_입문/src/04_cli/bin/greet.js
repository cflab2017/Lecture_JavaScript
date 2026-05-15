#!/usr/bin/env node
/**
 * 간단한 CLI: greet 홍길동
 * 설치 테스트: 이 폴더에서 npm link 후 터미널에서 greet 이름
 */
const name = process.argv[2] ?? 'world';
console.log(`안녕하세요, ${name}님!`);
