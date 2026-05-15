/**
 * Promise.all 과 Promise.race 비교.
 */
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

Promise.all([delay(100, "A"), delay(200, "B"), delay(150, "C")]).then((values) => {
  console.log("all:", values);
});

Promise.race([delay(100, "X"), delay(50, "Y"), delay(80, "Z")]).then((value) => {
  console.log("race winner:", value);
});
