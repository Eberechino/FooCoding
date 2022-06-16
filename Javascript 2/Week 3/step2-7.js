// Step 7
"use strict";

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

//f1 is pass by value (the x variable: 9 does not change, until the function adds 1 as an argument and returns 10)- the variable is a primitive value so changing the value inside a function will not affect the underlying primitive value
//f2 is pass by reference (the y variable: {x:9} references an object) so passing the reference as the argument inside f2 also affects the object itself
