// js-drills/20-filter-via-reduce.js
const requests = require("./13-data.js");

const nativeFilter = requests.filter((r) => r.severity === "high");

const filterViaReduce = requests.reduce(function (acc, request) {
  if (request.severity === "high") {
    acc.push(request);
  }
  return acc;
}, []);

console.log(nativeFilter.length, filterViaReduce.length);  // predict — should match
console.log(JSON.stringify(nativeFilter) === JSON.stringify(filterViaReduce));