/** 명시적/암묵적 타입 변환을 비교한다. */
console.log(Number("42"));      // 42
console.log(Number("42px"));    // NaN
console.log(parseInt("42px"));  // 42

console.log(String(123));       // "123"
console.log(Boolean(0));        // false

// 암묵적 변환
console.log("5" + 1);   // "51"
console.log("5" - 1);   // 4
console.log("5" * "2"); // 10
console.log(+"3.14");   // 3.14
