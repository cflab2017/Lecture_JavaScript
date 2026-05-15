/**
 * fetch 에러 처리: res.ok와 catch
 */
fetch('https://jsonplaceholder.typicode.com/users/9999')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error('실패:', err.message));
