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

function thing() { }

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