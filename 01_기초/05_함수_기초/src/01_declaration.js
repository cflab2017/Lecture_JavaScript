/** 함수 선언문은 호이스팅되어 정의 이전에도 호출 가능하다. */
console.log("3 + 4 =", add(3, 4));

function add(a, b) {
  return a + b;
}

/** 사각형의 넓이를 구한다. */
function area(w, h) {
  return w * h;
}
console.log("area(5,6) =", area(5, 6));
