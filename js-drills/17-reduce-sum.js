// js-drills/17-reduce-sum.js
const numbers = [10, 20, 30, 40];

const total = numbers.reduce(function (accumulator, current) {
  console.log("accumulator:", accumulator, "current:", current);
  return accumulator + current;
}, 0);  // <-- 0 is the starting value

console.log("final total:", total);