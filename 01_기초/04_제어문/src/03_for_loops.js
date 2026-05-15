/** 네 가지 반복 방식을 비교한다. */
const arr = ["a", "b", "c"];

// 1) 전통적 for
for (let i = 0; i < arr.length; i += 1) {
  console.log("for", i, arr[i]);
}

// 2) while
let i = 0;
while (i < arr.length) {
  console.log("while", arr[i]);
  i += 1;
}

// 3) for...of (값 순회 - 배열/이터러블에 권장)
for (const v of arr) console.log("for...of", v);

// 4) for...in (키 순회 - 객체에 권장)
const obj = { x: 1, y: 2 };
for (const key in obj) console.log("for...in", key, "=", obj[key]);
