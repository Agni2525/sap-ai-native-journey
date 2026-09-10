// js-drills/06-functions-are-values.js
function greet(name) {
    return `Hello, ${name}`;
  }
  
  const sayHi = greet;           // assigning a function to another variable — just like a number
  console.log(sayHi("Ravi"));    // "Hello, Ravi" — sayHi IS greet, not a copy of its output