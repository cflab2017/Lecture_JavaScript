/**
 * 상속과 super
 */
"use strict";

class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound`; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    return `${super.speak()} (woof, ${this.breed})`;
  }
}

const d = new Dog("Rex", "Husky");
console.log(d.speak());
console.log(d instanceof Animal); // true
