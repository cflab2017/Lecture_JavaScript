/** 자기소개를 다양한 console 메서드로 출력한다. */
const profile = {
  name: "홍길동",
  language: "JavaScript",
  motto: "매일 한 줄이라도 코딩하자",
};

console.log("이름:", profile.name);
console.info("좋아하는 언어:", profile.language);
console.warn("다짐:", profile.motto);
console.table(profile);
