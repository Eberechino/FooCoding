"use strict";

const values = ["a", "b", "c", "d", "a", "e", "f", "c"];
const uniqueValues = values.filter((x, i, array) => array.indexOf(x) === i);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
