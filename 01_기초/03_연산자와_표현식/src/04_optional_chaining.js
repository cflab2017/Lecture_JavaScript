/** 옵셔널 체이닝으로 안전하게 접근한다. */
const user = {
  name: "Ada",
  address: { city: "London" },
};

console.log(user?.address?.city);          // "London"
console.log(user?.company?.name);          // undefined
console.log(user?.company?.name ?? "무직"); // "무직"

const maybeFn = undefined;
console.log(maybeFn?.());                  // undefined (에러 아님)

const arr = null;
console.log(arr?.[0]);                     // undefined
