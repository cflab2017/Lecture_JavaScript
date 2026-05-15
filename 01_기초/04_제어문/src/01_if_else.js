/** 점수에 따라 등급을 분기한다. */
function grade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

for (const s of [95, 82, 71, 60, 45]) {
  const pass = s >= 60 ? "합격" : "불합격";
  console.log(`${s}점 → ${grade(s)} (${pass})`);
}
