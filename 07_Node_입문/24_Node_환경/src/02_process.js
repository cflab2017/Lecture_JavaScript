/**
 * process.argv와 process.env
 * 실행 예: node 02_process.js apple 5
 */
const [, , fruit, countStr] = process.argv;
const count = Number(countStr ?? 1);

console.log(`인자: ${fruit} × ${count}`);
console.log('전체 argv:', process.argv);
console.log('HOME 환경변수:', process.env.HOME ?? process.env.USERPROFILE);
