/** 원의 넓이와 둘레를 반환한다. */
function circle(r) {
  const area = Math.PI * r * r;
  const perimeter = 2 * Math.PI * r;
  return {
    area: Number(area.toFixed(2)),
    perimeter: Number(perimeter.toFixed(2)),
  };
}

console.log(circle(1));
console.log(circle(5));
console.log(circle(10));
