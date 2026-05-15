/** continue 로 짝수 건너뛰기, break 로 조기 종료. */
for (let i = 1; i <= 10; i += 1) {
  if (i % 2 === 0) continue;
  if (i > 7) break;
  console.log("홀수:", i);
}

// 가드 절 패턴
function greet(name) {
  if (!name) return "이름이 없습니다";
  return `안녕하세요, ${name}!`;
}
console.log(greet(""));
console.log(greet("Ada"));
