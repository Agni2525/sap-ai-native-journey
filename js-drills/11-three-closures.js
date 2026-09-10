// js-drills/11-three-closures.js
function makeGreeter(name) {
    return function () {
      console.log(`Hello, ${name}`);  // closes over "name"
    };
  }
  
  function makeMultiplier(factor) {
    return function (n) {
      return n * factor;  // closes over "factor"
    };
  }
  
  function makeLogger(prefix) {
    let callCount = 0;
    return function (message) {
      callCount++;
      console.log(`[${prefix} #${callCount}] ${message}`);  // closes over BOTH prefix and callCount
    };
  }
  
  const greetSam = makeGreeter("Sam");
  const triple = makeMultiplier(3);
  const errorLog = makeLogger("ERROR");
  
  greetSam();                // Hello, Sam
  console.log(triple(7));    // 21
  errorLog("disk full");     // [ERROR #1] disk full
  errorLog("disk full");     // [ERROR #2] disk full — callCount persisted between calls
  console.log(greetSam("MAX"));