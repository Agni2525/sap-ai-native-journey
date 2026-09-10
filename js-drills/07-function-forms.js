// js-drills/07-function-forms.js
function add(a, b) {          // declaration — hoisted, has its own name
    return a + b;
  }
  
  const subtract = function (a, b) {  // expression — a function-value assigned to a variable
    return a - b;
  };
  
  const multiply = (a, b) => a * b;   // arrow — shorter, and NOT just shorter syntax
  console.log(add(1, 2));
  console.log(subtract(1, 2));
  console.log(multiply(1, 2));