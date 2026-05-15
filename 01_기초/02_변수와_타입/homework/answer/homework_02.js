/** 문자열을 숫자로 변환해 짝/홀수를 판별한다. */
const input = "42";

const n = Number(input);
if (Number.isNaN(n)) {
  console.log("숫자가 아닙니다");
} else if (n % 2 === 0) {
  console.log(`${n} 은(는) 짝수`);
} else {
  console.log(`${n} 은(는) 홀수`);
}
