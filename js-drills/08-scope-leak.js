// js-drills/08-scope-leak.js
function outer() {
    var a = 1;
    let b = 2;
  
    if (true) {
      var a2 = 10;   // var — does NOT respect the if-block
      let b2 = 20;   // let — DOES respect the if-block
    }
  
    console.log(a2);  // 10 — var leaked out of the block, still visible
    console.log(b2);  // ReferenceError — let respected the block boundary, gone
  }
  
  outer();