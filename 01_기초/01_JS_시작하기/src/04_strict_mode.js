"use strict";
/** strict 모드에서는 선언하지 않은 변수에 할당하면 에러가 발생한다. */
try {
  // 아래 줄의 주석을 풀면 ReferenceError 발생
  // undeclared = 10;
  const value = 10;
  console.log("strict 모드에서도 정상 동작:", value);
} catch (err) {
  console.error("에러 발생:", err.message);
}
