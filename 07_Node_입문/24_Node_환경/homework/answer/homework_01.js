/**
 * 과제 1: 명령행 인자 두 수 더하기 (CommonJS)
 * 실행: node homework_01.js 3 5
 */
const [, , aStr, bStr] = process.argv;
const a = Number(aStr);
const b = Number(bStr);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('숫자 두 개를 입력하세요.');
  process.exit(1);
}

console.log(`합: ${a + b}`);
