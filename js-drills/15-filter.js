// js-drills/15-filter.js
const requests = require("./13-data.js");

const highSeverity = requests.filter(function (request) {
  return request.severity === "high";
});

console.log(highSeverity);
// predict: how many objects come back? Full objects, or just a field?
const openRequests = requests.filter((r) => r.status === "open");
console.log(openRequests.length);  // predict this number before running