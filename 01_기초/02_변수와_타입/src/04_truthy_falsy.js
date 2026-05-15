/** falsy 값 7 가지를 점검한다. */
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

for (const v of falsyValues) {
  console.log(`${String(v).padEnd(10)} → ${Boolean(v)}`);
}

// 흔한 함정
console.log("'0' →", Boolean("0"));   // true (비어 있지 않은 문자열)
console.log("[] →", Boolean([]));     // true (객체)
console.log("{} →", Boolean({}));     // true
