// 19-optional-chaining.js
const request = { equipment: { id: "EQ-01" } };
console.log(request.equipment?.id);
console.log(request.technician?.name); // doesn't throw, even though technician is undefined