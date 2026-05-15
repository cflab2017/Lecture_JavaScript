/** == 와 === 의 차이, NaN 비교를 확인한다. */
console.log(0 == "");        // true
console.log(0 === "");       // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(NaN === NaN);             // false
console.log(Number.isNaN(NaN));       // true
console.log(Object.is(NaN, NaN));     // true
