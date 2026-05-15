/** DevTools Console 에서 활용하면 좋은 패턴들. */
const user = { name: "Grace", age: 36, role: "admin" };

console.log("객체:", user);
console.dir(user);          // 객체의 속성 트리 보기
console.assert(user.age >= 18, "성인이어야 합니다");
console.group("user 정보");
console.log("이름:", user.name);
console.log("역할:", user.role);
console.groupEnd();
