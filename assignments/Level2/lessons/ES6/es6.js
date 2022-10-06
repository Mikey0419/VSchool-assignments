// Why is ageRange not defined?
// How can we fix this function with var? 
// How can we fix this function avoiding the use of var?
// Why would you use const vs let?
function getAgeRange({age}){
    let ageRange
    if(age < 18){
        ageRange = "Child"
    } else if(age >= 18 && age < 80){
        ageRange = "Adult"
    } else {
        ageRange = "Elderly Person"
    }

    return ageRange
}
// What would the above function potentially look like if we destructured the person parameter?

const person = { name: "Andrea", age: 27 }
// Why can we add .ageRange to person when we used const to define person?
person.ageRange = getAgeRange(person) // feel free to comment out lines that cause errors
person.dog = getAgeRange(person);
//or lines that clutter the console
console.log(person, '\n');
console.log(`The ${person.ageRange}, ${person.name}, is ${person.age} years old.`)
// change the above concatented string into a template literal

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
// replace this line with one that uses a spread oporator to do the same thing as concat
const fringeMonths = [...springMonths, ...fallMonths]

// console.log(springMonths, fallMonths, fringeMonths)

/*

PART 2

*/

/* https://coursework.vschool.io/es6-practice-let-const-fat-arrow-functions-default-arguments-template-literals/
https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators/ */

/* For this review, follow the directions in the JS file to make the code more ES6y. Comment and uncomment code as you work down the file. Run it to make these functions work or just more readable practicing ES6.

You'll be using:

arrow functions
rest
spread
destructuring in a parameter
default parameters */

const myButton = document.getElementById("mybutton");
const output = document.getElementById('output');
const input = document.getElementById('input');
// change this function to be an arrow function
/* myButton.addEventListener("click", () => { output.innerText = "You've submitted: " + input.value;
}) */

myButton.addEventListener("click", () => {
    output.innerText = "You have submitted: " + input.value;
})

//-------------------------------------------------------------------------------------------
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(...arrAnimals) {  
    console.log(arrAnimals);
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//-------------------------------------------------------------------------------------------
// Use destructuring to use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation));

// console.log(parseSentence(vacation)) // this line will break stuff unless you fix the parameter

//-------------------------------------------------------------------------------------------
// Make the following function more ES6xy. Use at least both the rest and spread operators:
// this function should add as many items to the front of the returned array as the caller of the function wants
const unshift = (array, ...arr) => {  return [...arr, ...array] }

//-------------------------------------------------------------------------------------------
// make "greeting" default to "hello"
function greet(name, greeting = "Hello"){
    return greeting + ", " + name
}

console.log(greet('Emily'))