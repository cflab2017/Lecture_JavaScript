/**
 * 과제 2: 비공개 잔액 계좌
 */
"use strict";

/**
 * @param {number} initial
 */
function makeAccount(initial) {
  let balance = initial;
  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) {
      if (amount > balance) throw new Error("insufficient");
      balance -= amount;
    },
    balance() { return balance; },
  };
}

const acc = makeAccount(1000);
acc.deposit(500);
acc.withdraw(300);
console.log(acc.balance()); // 1200
