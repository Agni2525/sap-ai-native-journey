// 02-const-object-mutation.js
const user = { role: "developer" };
// const user = Object.freeze({ role: "developer" });
user.role = "cloud developer"; // this WORKS — why, if it's const?
console.log(user);