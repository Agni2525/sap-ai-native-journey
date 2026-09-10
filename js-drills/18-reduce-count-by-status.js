// js-drills/18-reduce-count-by-status.js
const requests = require("./13-data.js");

const countByStatus = requests.reduce(function (acc, request) {
  if (!acc[request.status]) {
    acc[request.status] = 0;
  }
  acc[request.status]++;
  return acc;
}, {});  // <-- starting value is an empty OBJECT, not zero

console.log(countByStatus);
// predict this before running — what shape is the result?