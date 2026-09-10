// js-drills/14-map.js
const requests = require("./13-data.js");

const equipmentNames = requests.map(function (request) {
  return request.equipment;
});

console.log(equipmentNames);
// predict this before running — how many items, what type?
// js-drills/14-map.js (add below)
const severities = requests.map((r) => r.severity);
console.log(severities);