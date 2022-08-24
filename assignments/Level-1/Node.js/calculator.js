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