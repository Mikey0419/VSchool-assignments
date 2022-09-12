/* 
1. Console must greet player with a fun message
2. Console must ask for the player's name and store it
3. Walking:
    - The console will ask the user to enter a "w" to walk
    - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
    - Use a while loop to control this flow.
4. If a wild enemy appears:
    - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
    - The user can decide to attack or run
    - If attacking, a random amount of damage will be dealt between a min and max
    - If running, there will be a 50% chance of escaping
    - After the player attacks or runs the enemy attacks back for a random damage amount
    - The player and enemy will attack each other in a loop until one of them passes out or dies.
    - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
    - If the enemy kills the player the console prints a cool death message and the game ends
5. Inventory
    - When the player kills enemies, they are awarded with items
    - If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory */

const readLine = require("readline-sync")

const red = '\x1b[31m';
const resetC = '\x1b[0m';

const msg = "\
  ██████  ██████  ██       ██████  ███████ ███████  █████  ██          ██████  ██████   ██████ \n \
██      ██    ██ ██      ██    ██ ██      ██      ██   ██ ██          ██   ██ ██   ██ ██      \n \
██      ██    ██ ██      ██    ██ ███████ ███████ ███████ ██          ██████  ██████  ██   ███\n \
██      ██    ██ ██      ██    ██      ██      ██ ██   ██ ██          ██   ██ ██      ██    ██\n \
 ██████  ██████  ███████  ██████  ███████ ███████ ██   ██ ███████     ██   ██ ██       ██████  \n";

let name = "";
let HP = 100;

const itemsArray = [];
let alive = true;
let lifeArr = "❤️ ❤️ ❤️ ❤️ ❤️";
const enemies = ["Thanos", "Gorr the God Slayer", "Mysterio"];
const fightOrRun = ["Fight", "Run!"];
const walkOrPrint = ["Walk", "Print inventory"];

const introMessage = () => {
    console.clear();
    console.log(`${red}${msg}${resetC}`, "\n\nPlease enter your name: ");
    name = readLine.prompt();
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const adjustHP = (addYesNo, adjNum) => {
    let newHP = 0;
    newHP = (addYesNo === false) ? HP - (HP * adjNum): HP + (HP * adjNum);

    if(Math.floor(newHP) === 0) {
        console.clear();
        console.log("You died!");
        alive = false;
        lifeArr = "" + `${red}You died!!${resetC}` + "\t💀💀💀💀💀";
        return 0; }

    switch (Math.floor(newHP) > 0) {
        case (newHP >= 100):
            newHP = 100;
            lifeArr = "❤️ ❤️ ❤️ ❤️ ❤️";
            break;
        case ((newHP >= 80) && (newHP < 100)):
            lifeArr = "❤️ ❤️ ❤️ ❤️ 💀";
            break;
        case ((newHP >= 60) && (newHP < 80)):
            lifeArr = "❤️ ❤️ ❤️ 💀💀";
            break;
        case ((newHP >= 40) && (newHP < 60)):
            lifeArr = "❤️ ❤️ 💀💀💀";
            break;
        case ((newHP > 1) && (newHP < 40)):
            lifeArr = "❤️ 💀💀💀💀";
            break;
        case (newHP < 1):
            lifeArr = "💀💀💀💀💀";
            break;
    }

    return Math.floor(newHP);
}

const splashPrompt = () => {
    console.clear();
    console.log("\t\t\t\t❮",name, "❯\tHP [", HP, "]  ", lifeArr, "\n");
}

introMessage();
splashPrompt();

while (alive) {
    let rndNum = Math.floor(Math.random() * 100);

    let choice = readLine.keyInSelect(walkOrPrint, "Please select an option:");

    switch (choice) {
        //0 = walk, 1 = print inventory
        case 0:
            //generate a random number whereby 1/3 and 1/4 cause an enemy to appear
            let randEnemy = Math.floor(Math.random() * 100);
            if ((randEnemy % 3 === 0) || (randEnemy % 4 === 0)) {
                splashPrompt();
                //choose an enemy
                let whichEnemy = getRndInteger(0, 3);
                console.log(`${enemies[whichEnemy]} is here!  What would you like to do?`);
                let stayRun = readLine.keyInSelect(fightOrRun);
            } else {
                splashPrompt();
                console.log("Nothing crazy going on right now\n");
            }
            break;
        case 1:
            splashPrompt();
            console.log(itemsArray);
            break;
        case -1:
            break;
    }

    /*HP = (rndNum >= 50) ? adjustHP(false, Math.random()) : adjustHP(true, Math.random());*/
}