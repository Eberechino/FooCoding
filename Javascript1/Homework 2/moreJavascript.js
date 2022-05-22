/* 1 */

// Create a function that takes 3 arguments and returns the sum of the these arguments.
function threeArguments (first, second, third){
    return first + second + third
}

threeArguments(300, 20, 2)
/* 2 */

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color){
    return console.log('You chose' + color + 'car')
}
colorCar(' a red color')


/* 3 */ 

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

const someObjects = {
    numbers: [1, 2, 3, 4],
    range: 4,
    type: 'number',
    }
    
    function printObject(someObjects) {
      for (key in someObjects) {
    console.log(key, someObjects[key])
    }
    }
      
    printObject(someObjects)

/* 4 */

// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType (color, code){
    if (code === 1 )
    return ('a ' + color + ' car')
    if (code === 2)
    return ('a ' + color + ' motorbike')
    else 
    return ('no vehicle')
}

vehicleType ('blue', 2)


/* 5 */

// Can you write the following without the if statement, but with just as a single line with console.log(...);?
// With the use of ternary operators

    console.log( 3 === 3 ? "yes" : "no")


/* 6 */

// Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle (color, age, type){
    if ( age >= 1 && type < 6 )
    return ('a ' + color + ' used car')
    else 
    return ('no vehicle')
}

vehicle('blue', 1, 5)

/* 7 */

// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let vehicleList = [ "motorbike", "caravan", "bike", "truck", "train"]

/* 8 */

//How do you get the third element from that list?

vehicleList[vehicleList.length - 3] //access bike in the vehicleList array by specifying the index number of the position in the array using .length.


/* 9 */
function vehicle(color, age, vehicleType){
if (age <= 2){
    return console.log ('a ' + color + ' used ' + vehicleList[vehicleType])
}
if (age >= 3 && age <= 5){
    return console.log ('a ' + color + ' new ' + vehicleList[vehicleType])
}
}
vehicle('green', 3, 1)

/* 10 */

function vehicleAd() {
  let adMessage = "Amazing Joe's Garage, we service ";

  for (let i = 0; i <= vehicleList.length - 1; i++) {
    adMessage += vehicleList[i] + 's'
    
    if (i === vehicleList.length -1) {
        adMessage += '.'
    }
    else if (i === vehicleList.length -2) {
        adMessage += ' and '
    }
    else{
        adMessage += ', '
    }
  }
  return  adMessage
}
vehicleAd()

/* 11 */
