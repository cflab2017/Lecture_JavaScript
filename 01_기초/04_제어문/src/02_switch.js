/** switch 의 그룹 case 와 fallthrough 를 보여준다. */
function describe(day) {
  switch (day) {
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
      return "평일";
    case "Sat":
    case "Sun":
      return "주말";
    default:
      return "알 수 없음";
  }
}

for (const d of ["Mon", "Sat", "Xyz"]) {
  console.log(d, "→", describe(d));
}
