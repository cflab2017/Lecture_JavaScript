/** 가변 인자로 받은 숫자들의 평균을 구한다. */
function average(...nums) {
  if (nums.length === 0) return 0;
  const total = nums.reduce((acc, n) => acc + n, 0);
  return total / nums.length;
}

console.log(average());                  // 0
console.log(average(10));                // 10
console.log(average(1, 2, 3, 4, 5));     // 3
console.log(average(90, 80, 70));        // 80
