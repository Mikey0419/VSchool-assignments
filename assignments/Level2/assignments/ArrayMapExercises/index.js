console.clear();

/*
1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
  // your code here
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


*/

function doubleNumbers(arr) {
    let result = arr.map(x => x * 2);
    return result;
}

console.log(doubleNumbers([2, 5, 100]), "\n");

/*
2) Take an array of numbers and make them strings

function stringItUp(arr){
  // your code here
}

*/

function stringItUp(arr){
    let result = arr.map(item => item.toString());
    return result;
}

console.log(stringItUp([2, 5, 100]), "\n");

/*
3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr){
  // your code here
}

*/

function capitalizeNames(arr){
    let result = arr.map(function(x) {
        let arrayWord = x.toString();

        let firstLetter = arrayWord.slice(0, 1);
        let remainingLetters = arrayWord.slice(1, arrayWord.length);

        return firstLetter.toUpperCase() + remainingLetters.toLowerCase();
    })

    return result;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]), "\n");

/*
4) Make an array of strings of the names

function namesOnly(arr){
  // your code here
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

*/

function namesOnly(arr){
    let result = arr.map(name => name.name);
    return result;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]), "\n");

/*
5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
  // your code here
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

*/

function makeStrings(arr){
    let result = arr.map(function(item) {
        let userName = item.name;
        let userAge = item.age;

        let matrix = (item.age >= 18) ? " can go to The Matrix" : " can't go to The Matrix";

        return userName + matrix;
    })

    return result;
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]), "\n");

/*
6) Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
  // your code here
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
*/

function readyToPutInTheDOM(arr){
    let result = arr.map(function(item) {
        let itemName = item.name;
        let itemAge = item.age;

        let domName = "<h1>" + itemName + "</h1>";
        let domAge = "<h2>" + itemAge + "</h2>";

        return domName + domAge;
    })

    return result;
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));