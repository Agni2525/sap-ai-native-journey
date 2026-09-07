// 10-primitive-immutability.js
let str = "hello";
str[1] = "H"; // this silently does nothing — why?
console.log(str[0]);
let str2 = "hello";
str2 = str2.replace("h", "H");
console.log(str2); // "Hello"