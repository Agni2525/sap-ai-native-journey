// 20-nullish-coalescing.js
const severity = 0;
console.log(severity || "default");  // predict — this one's a trap
console.log(severity ?? "default");  // predict — and compare to the line above