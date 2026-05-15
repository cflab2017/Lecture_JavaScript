/** 점수 배열을 등급별로 집계한다. */
function gradeOf(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

const scores = [92, 78, 65, 88, 55, 100];
const summary = { A: 0, B: 0, C: 0, D: 0, F: 0 };

for (const s of scores) {
  summary[gradeOf(s)] += 1;
}

console.log(summary);
