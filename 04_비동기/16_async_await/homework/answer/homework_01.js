/**
 * 사용자를 가져온 뒤 그 사용자의 게시글을 가져옵니다.
 */
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "지민" }), 100);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, userId, title: "첫 글" }]), 100);
  });
}

async function main() {
  try {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    console.log(user.name, "의 게시글:", posts);
  } catch (err) {
    console.error(err);
  }
}

main();
