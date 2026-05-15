/**
 * 과제 1: 사용자 이름 목록 출력
 */
async function listUserNames() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const users = await res.json();
  users.forEach((u) => console.log(u.name));
}

listUserNames().catch((err) => console.error(err));
