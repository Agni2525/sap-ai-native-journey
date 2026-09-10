// js-drills/10-closure-independence.js
function makeCounter() {
    let count = 0;
    return function () {
      count = count + 1;
      return count;
    };
  }
  
  const counterA = makeCounter();
  const counterB = makeCounter();
  
  console.log(counterA());  // predict this before running
  console.log(counterA());  // predict this before running
  console.log(counterB());  // predict this before running — does it continue from counterA, or start fresh?