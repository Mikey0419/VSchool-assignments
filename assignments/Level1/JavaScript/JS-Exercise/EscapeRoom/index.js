const readLine = require("readline-sync");

let hasKey = false;
let isAlive = true;

options = ['Put hand in a hole', 'Find the key', 'Open the door'];

console.log("Welcome to Escape Room!  You will need to find the 🔑 to unlock the 🚪.\n\n** NOTE: Try not to put your hand in the 🕳 ...\n\n");

while(isAlive) {
    index = readLine.keyInSelect(options, 'Please enter the operation to perform: ');
    
    switch(options[index]) {
        //do something here with case
    }
}