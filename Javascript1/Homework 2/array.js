/* Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
Log your new array!
*/

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals.unshift("turtle"))
console.log(favoriteAnimals)

// Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.

favoriteAnimals.splice(1, 0, "meerkat")
//Write a console.log statement that explains in words you think the new value of the array is

//Log your new array!
console.log(
  "I think the new value of the array is blowfish, meerkat, capricorn, giraffe as shown: " +
    favoriteAnimals
);

/* Jason does not like 'giraffe', delete this animal from the array.
Again log your new array*/

favoriteAnimals.splice(-1, 1)
console.log(favoriteAnimals)

// Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
let deleteMeerkat = favoriteAnimals.indexOf("meerkat")
favoriteAnimals.splice(deleteMeerkat, 1)
console.log(favoriteAnimals)

// Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
console.log(
  "The item you are looking for is at index: " +
    favoriteAnimals.indexOf("meerkat")
);
