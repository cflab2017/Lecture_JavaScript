/**
 * 과제 1: 사용자 자기소개
 */
"use strict";

const user = {
  name: "도윤",
  age: 28,
  job: "개발자",
  introduce() {
    return `저는 ${this.name} 이고 ${this.age} 살 ${this.job} 입니다.`;
  },
};

console.log(user.introduce());
