/**
 * async/await로 재작성
 */
async function loadUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

(async () => {
  try {
    const user = await loadUser(2);
    console.log(user.name);
  } catch (err) {
    console.error(err);
  }
})();
