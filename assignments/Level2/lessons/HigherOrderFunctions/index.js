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