// 05-var-vs-let-loop.js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0);
  }
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0);
  }
  // predict the full output BEFORE running — write your guess as a comment