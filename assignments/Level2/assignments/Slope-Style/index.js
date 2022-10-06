const ConnectionsManager = require("auth0/src/management/ConnectionsManager");

console.clear();

function collectAnimals(...arr) {
    console.log(arr, '\n');
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

/*

Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

*/

function combineFruit(fruit, sweets, vegetables) {
    const foodObj = { fruit: [...fruit], sweets: [...sweets], vegetables: [...vegetables] };
    return foodObj;
}

const foodItems = combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]);
console.log(foodItems);

function parseSentence({location, duration}){
    return `\nWe're going to have a good time in ${location} for ${duration}\n`;
  }
  
console.log(parseSentence({location: "Burly Idaho", duration: "2 weeks"}));

function returnFirst(items){
    return firstItem = [...items][0]; /*change this line to be es6*/
}

console.log(returnFirst(['dog', 'cat', 'crystal', 'boat', 'house', 'car', 'lobster']));

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr;

    return `\nMy top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}\n`;
}

console.log(returnFavorites(favoriteActivities));

function combineAnimals(realArr, magicArr, mysteriousArr) {
    return combinedArr = [...realArr, ...magicArr, ...mysteriousArr];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals), '\n');

// ["dog", "cat", "mouse", "jackolope", "platypus"]

/* Make the following more ES6-ish */

function product(...arr) {
    const numbers = arr;
  
    return numbers.reduce((acc, number) => { return acc * number }, 1);
}

console.log(product(1,2,3,4,5,6), '\n');

function unshift(array, ...arr2) {
    return arr2.concat(array);
}
  
console.log(unshift(['dog', 'cat', 'eats'], 'food', 'pizza', 'beer'), '\n');

const populatePeople = (names) => { return names.map(name => { const [firstName, lastName] = name.split(" "); return { firstName: firstName, lastName: lastName } });
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]