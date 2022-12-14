const readLine = require("readline-sync");

let hasKey = false;
let isAlive = true;

options = ['π³ Put hand in a hole', 'π Find the key', 'πͺ Open the door'];

console.clear();
console.log("Welcome to Escape Room!  You will need to find the π to unlock the πͺ.\n\n** NOTE: Try not to put your hand in the π³ ...\n\n");

while (isAlive) {

    index = readLine.keyInSelect(options, 'Please enter the operation to perform: '); //returns index starting with 0; 'CANCEL'[0] = -1
    
    switch (index) {
        //do something here with case
        case -1: //user chooses [0] CANCEL
            isAlive = false;
            break;
        case 0: //user chooses [1] π³ Put hand in hole
            console.clear();
            console.log("\t\tOh no! πππ I mean, I did warn you ...\n\n");
            isAlive = false;
            break;
        case 1: //user chooses [2] π Find the key
            if (hasKey === false) {
                hasKey = true;
                console.clear();
                console.log("\t\tCongrats!  You found the π!  Now, open the πͺ and be free!\n\n");
            } else {
                console.clear();
                console.log("\t\tYou've already found the the π ... open the πͺ and be free ....\n\n");
            }
            break;
        case 2: //user chooses [3] πͺ Open the door
            console.clear();
            (hasKey === true) ? (console.log("\t\tYou did it! π₯³ππππΎπ"), isAlive = false) : console.log("\t\tYou don't have the π.  Find the π then open the πͺ ...\n\n");
            break;
    }
}