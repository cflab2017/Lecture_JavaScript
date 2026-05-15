/**
 * then / catch / finally 의 흐름을 보여줍니다.
 */
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) reject(new Error("잘못된 ID"));
      else resolve({ id, name: "지민" });
    }, 100);
  });
}

fetchUser(1)
  .then((user) => console.log("user:", user))
  .catch((err) => console.error(err.message))
  .finally(() => console.log("요청 종료"));

fetchUser(-1)
  .then((user) => console.log(user))
  .catch((err) => console.error("에러:", err.message))
  .finally(() => console.log("두 번째 요청 종료"));
