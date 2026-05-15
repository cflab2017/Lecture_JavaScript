/** 다양한 타입의 typeof 결과를 출력한다. */
const values = ["text", 3.14, true, undefined, null, Symbol("k"), 99n, { a: 1 }];

for (const v of values) {
  // 참고: typeof null === "object" 는 언어 초기의 버그가 남은 결과이다.
  console.log(`${String(v).padEnd(12)} → ${typeof v}`);
}
