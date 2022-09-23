/* A Higher Order Function/Method is a function that:
    1. Takes a function as a parameter
        // or
    2. Returns a function
    
Higher Order array methods follow that first criteria as they require a function as a parameter.  They do not return a function. */

function doMath(num1, num2, callback) {
    return callback(num1, num2); //callback is the placeholder for another function
}

function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    console.log(num1, "x", num2, "=");
    return num1 * num2;
}

console.log(doMath(5, 4, multiply));

// Higher order array methods
// .map()

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const result = arr.map(function(num){ // arr[i]
    return num + 10;
})

/*
ES6 version of the above map

const result = arr.map(num => num + 10);
*/

console.log("arr = ", arr);
console.log("\n\narr has been mapped into result:\n", result);

const users = [
    { name: "joe" },
    { name: "steve" },
    { name: "lisa" }
]

/* Create a new array of user names */

const userNames = users.map(x => x.name);

/*

Same as:

const userNames = users.map(function(x) {
    return x.name;
})

*/

console.log("\n", userNames);

// .filter()

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num){
//     if(num % 2 === 0){
//         return num + 10
//     }
// })

// const result = arr.filter(num => num % 2 === 0)

// console.log(result)



const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const action = movies.filter(actionMovie => actionMovie.genre === "action");

console.log(action, '\n');

/* # .forEach
    Returns: Undefined 
    Purpose: Used in place of a for-loop
        Caveat: For-loops allow you to customize where the loop starts, stops, and increments by.
                forEach will always loop the entire length of the array.*/

const numArr = [1, 2, 3, 4, 5, 6, 7, 8]
const newNumArr = [];

numArr.forEach(x => newNumArr.push(x + 1));

console.log(newNumArr, '\n');

const userArr = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

userArr.forEach(x => console.log(x.name, "says hi!"), '\n');

                
/*# .find()
    Returns: The first item it finds in the array that matches your criteria
    Purpose: Finding an item in an array*/

const findRick = userArr.find(user => user.name === "rick");
console.log(findRick,'\n');
    
/* # .findIndex()
    Returns: The index number of the first item it finds in the array that matches your criteria
    Purpose: Finding the index number of an item in an array */

const indexJoe = userArr.findIndex(user => user.name === "joe");
console.log(indexJoe, '\n');

/* # .some()
    Returns: Returns true if at least one item in the array matches your criteria, false otherwise
    Purpose: To see if something exists in an array */

const someResult = userArr.some(user => user.name[0] === 'j');
console.log('Does at least one item in userArr contain a j? ->', someResult, '\n');

/* # .every()
    Returns: Returns true if EVERY item in the array matches your criteria, false otherwise.
    Purpose: TO see if Everything in an array matches your criteria */

const everyResult = numArr.every(x => x > 0);
console.log("Does every number in numArr > 0? ->", everyResult);

/* # .sort()
    Returns: The array sorted but sort also mutates the original array, so capturing the returned value is not necessary.
    Purpose: To sort an unsorted array of items. */

const sortNumArr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5];

console.log(sortNumArr, "\nbecomes:");

sortNumArr.sort((a, b) => a - b);

console.log(sortNumArr);