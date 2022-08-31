var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.clear();

console.log("vegetables = ", vegetables, "\n");
console.log("1. Remove the last item from the vegetable array: vegetables.pop()")
vegetables.pop();
console.log("vegetables = ", vegetables, "\n");

console.log("fruit = ", fruit, "\n");
console.log("2. Remove the first item from the fruit array: fruit.shift()")
fruit.shift();
console.log("fruit = ", fruit, "\n");

console.log("3. Find the index of 'orange': fruit.indexOf('orange')");
console.log("Orange is in fruit[", fruit.indexOf('orange'),"]");

console.log("4. Add that number to the end of the fruit array: fruit.push(fruit.indexOf('orange'))");
fruit.push(fruit.indexOf('orange'));
console.log(fruit, "\n");

console.log("5.  Use the length property to find the length of the vegetable array: vegetables.length");
console.log("vegetables.length =", vegetables.length, "\n");

console.log("6.  Add that number to the end of the vegetable array: vegetables.push(vegetables.length)");
vegetables.push(vegetables.length);
console.log("vegetables = ", vegetables, "\n");

console.log("7.  Put the two arrays together into one array. Fruit first. Call the new Array 'food': const food = fruit.concat(vegetables)");
const food = fruit.concat(vegetables);
console.log("food =", food, "\n");

console.log("8.  Remove 2 elements from your new array starting at index 4 with one method: food.splice(4, 2)")
food.splice(4, 2);
console.log("food =", food, "\n");

console.log("9.  Reverse your array: food.reverse()");
food.reverse();
console.log("food =", food, "\n");

const myString = food.join(" ");
console.log(myString);