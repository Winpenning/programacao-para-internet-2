const ld = require("lodash");

const a = [1, 2, 3, 4, 5];
const b = [2, 3, 4, 5, 6,7,8,9,10];

const diff = ld.difference(a, b);

console.log(diff);