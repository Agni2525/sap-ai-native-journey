// js-drills/16-find.js
const requests = require("./13-data.js");

const firstHighSeverity = requests.find((r) => r.severity === "high");
console.log(firstHighSeverity);
// predict: is this an array, or a single object?

const nonExistent = requests.find((r) => r.severity === "critical");
console.log(nonExistent);
// predict this — what does find return when nothing matches?