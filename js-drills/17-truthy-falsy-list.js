// 17-truthy-falsy-list.js
const values = [0, "", null, undefined, NaN, false, "0", " ", [], {}];
values.forEach(v => console.log(v, "->", Boolean(v)));