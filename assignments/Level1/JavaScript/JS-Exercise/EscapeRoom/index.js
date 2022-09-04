const readLine = require("readline-sync");

let hasKey = false;
let isAlive = true;

options = ['🕳 Put hand in a hole', '🔑 Find the key', '🚪 Open the door'];

console.clear();
console.log("Welcome to Escape Room!  You will need to find the 🔑 to unlock the 🚪.\n\n** NOTE: Try not to put your hand in the 🕳 ...\n\n");

while (isAlive) {

    index = readLine.keyInSelect(options, 'Please enter the operation to perform: '); //returns index starting with 0; 'CANCEL'[0] = -1
    
    switch (index) {
        //do something here with case
        case -1: //user chooses [0] CANCEL
            isAlive = false;
            break;
        case 0: //user chooses [1] 🕳 Put hand in hole
            console.clear();
            console.log("\t\tOh no! 💀💀💀 I mean, I did warn you ...\n\n");
            isAlive = false;
            break;
        case 1: //user chooses [2] 🔑 Find the key
            if (hasKey === false) {
                hasKey = true;
                console.clear();
                console.log("\t\tCongrats!  You found the 🔑!  Now, open the 🚪 and be free!\n\n");
            } else {
                console.clear();
                console.log("\t\tYou've already found the the 🔑 ... open the 🚪 and be free ....\n\n");
            }
            break;
        case 2: //user chooses [3] 🚪 Open the door
            console.clear();
            (hasKey === true) ? (console.log("\t\tYou did it! 🥳🎈🎊🎁🍾🎉"), isAlive = false) : console.log("\t\tYou don't have the 🔑.  Find the 🔑 then open the 🚪 ...\n\n");
            break;
    }
}