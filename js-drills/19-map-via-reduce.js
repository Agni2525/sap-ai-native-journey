// js-drills/19-map-via-reduce.js
const requests = require("./13-data.js");

// Native version, for comparison
const nativeMap = requests.map((r) => r.equipment);

// Your version, using ONLY reduce
const mapViaReduce = requests.reduce(function (acc, request) {
  acc.push(request.equipment);
  return acc;
}, []);  // <-- starting value is an empty ARRAY

console.log(nativeMap);
console.log(mapViaReduce);
console.log(JSON.stringify(nativeMap) === JSON.stringify(mapViaReduce));  // should be true