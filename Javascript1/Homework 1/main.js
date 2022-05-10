1; // Write a console.log statement saying "Hello World!" for each language that you know
console.log("Hello World"); // English
console.log("Mo ki O Ile Aiye"); // Yoruba
console.log("Hej Världen"); // Swedish
console.log("Ndewo Ụwa"); // Igbo

2; // Find a solution for this error.
console.log("I'm awesome");

3; // Declare a variable x
let x;
console.log("the value of my variable x will be: undefined");
//add a console.log statement that logs the value of x
console.log(x);
// initialize it with an integer
x = 15;
console.log("the value of my variable x will be: 15");
console.log(x);
//

4; // Declare a variable y and assign a string to it.
let y = "a string";
console.log("the value of my string will be: a string");
console.log(y);
//assign a new string to the variable
y = "a new string";
console.log("the value of my string will be: a new string");
console.log(y);

5; //round the number 7.25, to the nearest integer
let z = 7.25;
console.log(z);
// declare another variable and round to the nearest integer
a = Math.ceil(z); // rounds upward
console.log(a);
//  compare the two values and store the highest
if (a > z) {
    highestValue = 8
}
else {
    highestValue = 7.25
}
console.log(highestValue);


6; //declare an empty array.
const declaredArrays = [];
console.log("the value of my array will be: (0)");
console.log(declaredArrays);
// create array with favorite animals
const favoritePets = ["dogs", "cats", "rabbits"];
console.log(favoritePets);
// add statement to array
favoritePets[3] = "babypigs";
console.log(favoritePets);

7; // strings
let myString = "this is a test";
console.log(myString);
// get the length of string
myStringLength = myString.length;
console.log(myStringLength);
// or a shorter way is using the backtick character and $ identifier
console.log(`${myString.length}`);

8; // checks the types of two variables and prints out SAME TYPE
let numberType = 10;
console.log("The value of my variable numberType is: " + numberType);
let stringType = "this is a string";
console.log("The value of my variable stringType is: " + stringType);
const booleanType = true;
console.log("The value of my variable booleanType is: " + booleanType);
let undefinedType;
console.log("The value of my variable undefinedType is: " + undefinedType);
// determine data type
console.log("The type of variable is a number");
console.log(typeof numberType);
console.log("The type of variable is a string");
console.log(typeof stringType);
console.log("The type of variable is a boolean");
console.log(typeof booleanType);
console.log("The type of variable is undefined");
console.log(typeof undefinedType);

// compare variables types
if (typeof numberType === stringType) {
  console.log("SAME TYPE");
} else {
  console.log("NOT THE SAME TYPE");
}

if (typeof stringType === booleanType) {
  console.log("SAME TYPE");
} else {
  console.log("NOT THE SAME TYPE");
}

9; // Using the modulus operator to figure out the remainder of a division
let seven = 7;
seven = seven % 3;
console.log(seven);
// explanation of the modulus/remainder operator
console.log("Seven is divided by 3");
console.log("The % modulus returns the remainder left over after division");
console.log(
  "Since 7 divided by 3 gives a remainder of 1, the output is 1"
);

10; // Write a program to answer the following questions
let programArray = [1, 5, " unknown"];
programArray[3] = " space";
programArray.push(" farm", " glass", null, true, 45); // adds data types to the end of the array
console.log(
  `As shown: ${programArray}, it is possible to store multiple types in an array.`
);
// compare infinities
let compareInfinities = 6 / 10 === 10 / 0;
console.log(
  "The program shows that the values are not the same hence, the test produces: " +
    compareInfinities +
    " output"
);
