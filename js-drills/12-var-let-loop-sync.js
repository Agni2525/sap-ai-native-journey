// js-drills/12-var-let-loop-sync.js
var funcs1 = [];
for (var i = 0; i < 3; i++) {
  funcs1.push(function () { return i; });
}
console.log(funcs1.map(f => f()));  // predict this on paper BEFORE running

let funcs2 = [];
for (let j = 0; j < 3; j++) {
  funcs2.push(function () { return j; });
}
console.log(funcs2.map(f => f()));  // predict this on paper BEFORE running