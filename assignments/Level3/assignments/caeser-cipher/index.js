var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

let length = input.length;

let newArr = [];

const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

for(let i = 0; i < length; i++) {
    let inputLetter = input[i];
    let index = alphabet.findIndex(item => item === inputLetter);
    let shiftNum = parseInt(index - shift);

    index !== -1 ? newArr.push(alphabet.at(shiftNum)) : newArr.push(inputLetter);
}

console.log("\n\nCipher text: ", newArr.join(''));