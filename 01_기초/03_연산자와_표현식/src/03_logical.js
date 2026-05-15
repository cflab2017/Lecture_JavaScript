/** &&, ||, ?? 의 단축 평가를 비교한다. */
const empty = "";
const zero = 0;

console.log(empty || "기본값");   // "기본값" (empty 가 falsy)
console.log(empty ?? "기본값");   // ""        (null/undefined 아님)
console.log(zero || 100);          // 100
console.log(zero ?? 100);          // 0

// && 는 첫 falsy 또는 마지막 값을 반환
console.log(true && "ok");         // "ok"
console.log(0 && "skip");          // 0
