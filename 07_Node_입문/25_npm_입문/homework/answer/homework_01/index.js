/**
 * 과제 1: readline으로 이름을 입력받아 인사
 * 실행: npm start
 */
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface({ input, output });

const name = await rl.question('이름을 입력하세요: ');
console.log(`안녕하세요, ${name.trim() || '익명'}님! 환영합니다.`);

rl.close();
