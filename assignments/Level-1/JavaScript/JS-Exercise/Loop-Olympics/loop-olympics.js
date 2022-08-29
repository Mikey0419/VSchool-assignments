/* BRONZE

1. Write a for loop that will push the numbers 0 through 9 to an array.
2. Write a for loop that prints to the console only even numbers 0 through 100.
3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]` */

const numberArray = [];
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (var i = 0; i < 10; i++) {
    numberArray.push(i);
}

console.log(numberArray);

for (var i = 0; i < 101; i++) {
    if (i % 2 === 0) { console.log(i); }
}

for (var i = 0; i < fruit.length; i++) {
    if (i % 2 === 0) { console.log(fruit[i]); }
}

/* SILVER

1. Write a loop that will print out all the names of the people of the people array
2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer". */

const names = [];
const occupations = [];

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);

    if (i % 2 === 0) {
        names.push(peopleArray[i].name);
        occupations.push(peopleArray[i+1].occupation);
    }
}

console.log(names);
console.log(occupations);

/* GOLD

1. Create an array that mimics a grid like the following using nested for loops:

[[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]

2. Create an array that mimics a grid like the following using nested for loops:

[[0, 0, 0],
[1, 1, 1],
[2, 2, 2]]

3. Create an array that mimics a grid like the following using nested for loops:

[[0, 1, 2],
[0, 1, 2],
[0, 1, 2]]

4. Given a grid like the previous ones, write a nested for loop that would change every number to an x.

*/

const initialArray = [];
const secondArray = [];
const thirdArray = [];

for (var i = 0; i < 3; i++) {
    initialArray[i] = [];
    for (var j = 0; j < 3; j++) {
        initialArray[i].push(0);
    }
}

console.log(initialArray, "\n\n");

for (var i = 0; i < 3; i++) {
    secondArray[i] = [];
    for (var j = 0; j < 3; j++) {
       if(i === 0) { secondArray[i].push(0); }
       if(i === 1) { secondArray[i].push(1); }
       if(i === 2) { secondArray[i].push(2); }
    }
}

console.log(secondArray, "\n\n");

for (var i = 0; i < 3; i++) {
    thirdArray[i] = [];
    for (var j = 0; j < 3; j++) {
       thirdArray[i].push(j);
    }
}

console.log(thirdArray, "\n\n");

for (var i=0; i < initialArray.length; i++) {
    for (var j = 0; j < initialArray[i].length; j++) {
        initialArray[i][j] = "X";
        secondArray[i][j] = "X";
        thirdArray[i][j] = "X";
    }
}

console.log("First array:\n", initialArray, "\nSecond array:\n", secondArray, "\nThird array:\n", thirdArray);