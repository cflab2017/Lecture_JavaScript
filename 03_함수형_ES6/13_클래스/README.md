# 13. 클래스

> 단계: 중급 | 선수: 12_클로저와_스코프

## 학습 목표
- `class` 문법으로 객체 청사진을 정의한다.
- `constructor` 로 인스턴스 초기화를 한다.
- `extends` 와 `super` 로 상속을 구현한다.
- `static` 메서드와 getter/setter 를 사용한다.
- 클래스는 프로토타입 기반의 문법 설탕임을 안다.

## 1. 클래스 기본
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hi, I am ${this.name}`;
  }
}
const p = new Person("Sun");
p.hello();
```

`new` 없이 호출하면 TypeError 입니다.

## 2. 상속 (extends, super)
```js
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  intro() {
    return `${super.hello()} (grade ${this.grade})`;
  }
}
```

`super(...)` 는 부모 생성자를, `super.method()` 는 부모 메서드를 호출합니다.

## 3. static 과 getter/setter
정적 멤버는 인스턴스가 아니라 클래스 자체에 붙습니다.

```js
class MathX {
  static square(x) { return x * x; }
}
MathX.square(5);

class Temp {
  constructor(c) { this._c = c; }
  get fahrenheit() { return this._c * 9/5 + 32; }
  set fahrenheit(f) { this._c = (f - 32) * 5/9; }
}
```

## 4. 프로토타입과의 관계
`class` 는 내부적으로 함수와 프로토타입 체인을 사용합니다. `Person.prototype.hello === p.hello` 입니다.

## 핵심 예제 (src/)

| 파일 | 다루는 내용 |
|------|------------|
| `01_class_basic.js` | 클래스 기본 |
| `02_constructor.js` | constructor 와 인스턴스 필드 |
| `03_extends.js` | 상속과 super |
| `04_static_getter.js` | static, getter/setter |

## ⚠️ 자주 하는 실수
1. `new` 없이 클래스 호출 → TypeError.
2. 자식 생성자에서 `super()` 전에 `this` 접근.
3. 화살표 함수로 메서드 정의 시 인스턴스마다 함수가 생성되어 메모리 낭비.
4. `static` 메서드에서 `this` 가 인스턴스를 가리킨다고 오해 (클래스를 가리킴).
5. getter/setter 와 같은 이름의 속성을 동시에 두려고 한다.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. 비공개 필드는?** A. `#field` 문법으로 진짜 비공개 필드를 만들 수 있습니다 (ES2022+).

**Q2. 다중 상속은?** A. 지원하지 않습니다. 믹스인 패턴을 활용합니다.

**Q3. 클래스 vs 팩토리 함수?** A. 클래스는 `new`/상속에 강하고, 팩토리는 클로저로 비공개 상태를 만들기 쉽습니다.

## 📝 과제 (homework/)
- `homework_01.js` — `Animal` 과 `Dog extends Animal` 을 작성하세요.
- `homework_02.js` — `Rectangle` 에 area getter 와 정적 from 메서드를 추가하세요.

## 다음 단원
[14_콜백과_타이머](../../04_비동기/14_콜백과_타이머/) — 비동기 입문.
