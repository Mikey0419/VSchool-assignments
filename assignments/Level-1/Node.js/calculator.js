const readLine = require("readline-sync")

/* 
- A function that adds two numbers and returns the result
- A function that multiplies two numbers and returns the result
- A function that divides two numbers and returns the result
- A function that subtracts two numbers and returns the result
- Each function will have 2 parameters, `num1`, `num2`
- On the console the prompt will print to the user:
- *Please enter your first number* (store that number)
- *Please enter your second number* (store that number)
- *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
- Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
- You will then print to the console: *The result is: [the result]
*/

const addTwo = (num1, num2) => {
    return num1 + num2;
}

const multiplyTwo = (num1, num2) => {
    return num1 * num2;
}

const divideTwo = (num1, num2) => {
    return num1 / num2;
}

const subtractTwo = (num1, num2) => {
    return num1 - num2;
}

options = ['Add', 'Subtract', 'Multiply', 'Divide'];

var firstNumber = readLine.questionInt('Please enter the first number: ');
var secondNumber = readLine.questionInt('Please enter the second number: ');

index = readLine.keyInSelect(options, 'Please enter the operation to perform: ');

if (options[index] == 'Add') {
    console.log("\nThe result is: ", addTwo(firstNumber, secondNumber));
} else if (options[index] == 'Subtract') {
    console.log("\nThe result is: ", subtractTwo(firstNumber, secondNumber));
} else if (options[index] == 'Multiply') {
    console.log("\nThe result is: ", multiplyTwo(firstNumber, secondNumber));
} else if (options[index] == 'Divide') {
    console.log("\nThe result is: ", divideTwo(firstNumber, secondNumber));
} else { 
    console.log("\nGoodbye!");
 }