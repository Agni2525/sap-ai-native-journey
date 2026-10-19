// js-drills/22-destructuring-rename-default.js
const request = { id: 1, equipment: "PUMP-04" };

const { equipment: eq, technician = "unassigned" } = request;
console.log(eq);           // renamed: property "equipment" pulled into variable "eq"
console.log(technician);   // predict this — request has no "technician" property at all