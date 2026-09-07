// 18-short-circuit.js
const config = null;
const port = config || 8080; // common pattern — why does this work?
console.log(port);