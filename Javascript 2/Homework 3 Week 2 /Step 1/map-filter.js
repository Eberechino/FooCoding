"use strict";

//  Step 1.1
const myNumbers = [1, 2, 3, 4];
const doubleOddNumbers = myNumbers.filter((n) => n % 2 === 1).map((n) => n * 2); // remove even numbers and multiply odd numbers by 2
console.log(doubleOddNumbers);

module.exports = {
  myNumbers,
  doubleOddNumbers,
};
