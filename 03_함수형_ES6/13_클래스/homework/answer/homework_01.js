/**
 * 과제 1: Animal / Dog
 */
"use strict";

class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} speaks`; }
}

class Dog extends Animal {
  speak() { return `${this.name} barks`; }
}

console.log(new Animal("Cat").speak());
console.log(new Dog("Rex").speak());
