// js-drills/21-destructuring-basic.js
const request = { id: 1, equipment: "PUMP-04", severity: "high", status: "open" };

// the old way
const equipmentOld = request.equipment;
const severityOld = request.severity;

// destructuring — same result, one line
const { equipment, severity } = request;

console.log(equipment, severity);