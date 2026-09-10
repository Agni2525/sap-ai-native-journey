// js-drills/09-closure-counter.js
function makeCounter() {
    let count = 0;  // should die when makeCounter() returns... but doesn't
  
    return function () {
      count = count + 1;
      return count;
    };
  }
  
  const counter = makeCounter();  // makeCounter() has ALREADY finished executing here
  console.log(counter());  // 1
  console.log(counter());  // 2
  console.log(counter());  // 3