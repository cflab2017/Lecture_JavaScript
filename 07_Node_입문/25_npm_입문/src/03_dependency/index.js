/**
 * chalk 패키지 사용 예제
 * 먼저: npm install
 * 실행: npm start
 */
import chalk from 'chalk';

console.log(chalk.green('성공 메시지'));
console.log(chalk.red.bold('빨간 굵은 글씨'));
console.log(chalk.blue('파란 글씨'), chalk.yellow('노란 글씨'));
