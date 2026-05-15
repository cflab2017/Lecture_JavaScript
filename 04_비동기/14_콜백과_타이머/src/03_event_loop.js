/**
 * 동기 코드와 비동기 콜백의 실행 순서를 관찰합니다.
 * 예상 출력: A -> D -> C -> B
 */
console.log("A");

setTimeout(() => console.log("B"), 100);
setTimeout(() => console.log("C"), 0);

console.log("D");
