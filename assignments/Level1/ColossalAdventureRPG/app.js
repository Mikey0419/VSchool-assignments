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
const yellow = '\x1b[33m';
const green = '\x1b[32m';
const resetC = '\x1b[0m';
const magenta = '\x1b[35m';

const msg = "\
\t\t\t\t\t ██████  ██████  ██       ██████  ███████ ███████  █████  ██          ██████  ██████   ██████ \n \
\t\t\t\t\t██      ██    ██ ██      ██    ██ ██      ██      ██   ██ ██          ██   ██ ██   ██ ██      \n \
\t\t\t\t\t██      ██    ██ ██      ██    ██ ███████ ███████ ███████ ██          ██████  ██████  ██   ███\n \
\t\t\t\t\t██      ██    ██ ██      ██    ██      ██      ██ ██   ██ ██          ██   ██ ██      ██    ██\n \
\t\t\t\t\t ██████  ██████  ███████  ██████  ███████ ███████ ██   ██ ███████     ██   ██ ██       ██████  \n";

const msgWinner = "\
\t\t\t\t\t██    ██  ██████  ██    ██     ██     ██  ██████  ███    ██ ██ ██ \n \
\t\t\t\t\t ██  ██  ██    ██ ██    ██     ██     ██ ██    ██ ████   ██ ██ ██ \n \
\t\t\t\t\t  ████   ██    ██ ██    ██     ██  █  ██ ██    ██ ██ ██  ██ ██ ██ \n \
\t\t\t\t\t   ██    ██    ██ ██    ██     ██ ███ ██ ██    ██ ██  ██ ██        \n \
\t\t\t\t\t   ██     ██████   ██████       ███ ███   ██████  ██   ████ ██ ██ \n";

const msgGameOver = "\
\t\t\t\t\t ██████   █████  ███    ███ ███████      ██████  ██    ██ ███████ ██████ \n \
\t\t\t\t\t██       ██   ██ ████  ████ ██          ██    ██ ██    ██ ██      ██   ██ \n \
\t\t\t\t\t██   ███ ███████ ██ ████ ██ █████       ██    ██ ██    ██ █████   ██████   \n \
\t\t\t\t\t██    ██ ██   ██ ██  ██  ██ ██          ██    ██  ██  ██  ██      ██   ██ \n \
\t\t\t\t\t ██████  ██   ██ ██      ██ ███████      ██████    ████   ███████ ██   ██ \n";

let name = "";
let HP = 100;

let winner = false;
const itemsArray = [];
const items = ["🍌", "💣", "🗡", "🔫"];
let alive = true;
let lifeArr = "❤️ ❤️ ❤️ ❤️ ❤️";
const enemies = [];
const fightOrRun = ["Fight", "Run!"];
const walkOrPrint = ["Walk", "Print inventory"];

function Enemies(strName, intHP, intAttackPower) {
    this.name = strName;
    this.HP = intHP;
    this.attackPower = (intAttackPower === undefined) ? 10 : intAttackPower;
}

enemies[0] = new Enemies("Thanos", 100, 15);
enemies[1] = new Enemies("Mysterio", 100, 10);
enemies[2] = new Enemies("Gorr", 100);
enemies[3] = new Enemies("Green Goblin", 100, 10);

let defeatedEnemies = [];

const introMessage = () => {
    console.clear();
    console.log(`${green}${msg}${resetC}`, "\n\nPlease enter your name: ");
    name = readLine.prompt();
    console.clear();
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const adjustHP = (addYesNo, adjNum) => {
    let newHP = (addYesNo === false) ? (HP - adjNum) : (HP + adjNum);

    if (newHP <= 0) {
        console.clear();
        console.log("You died!");
        alive = false;
        lifeArr = "" + `${red}You died!!${resetC}` + "\t💀💀💀💀💀";
        return 0;
    }

    switch (newHP > 0) {
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

    return newHP;
}

const splashPrompt = () => {
    if (HP >= 100) { HP = 100; }
    console.log("\t\t\t\t🦸🏼‍♂️", `${green}${name}${resetC}`, " | HP ⟨", HP, "⟩ | ", lifeArr, "\n");
}

introMessage();
splashPrompt();

while (alive && !winner) {

    /* check and see if all enemies have been defeated */
    if (enemies.length <= 0) {
        console.clear();
        winner = true;
        alive = false;
        break;
    }

    let choice = readLine.keyInSelect(walkOrPrint, "Please select an option:");

    switch (choice) {
        //0 = walk, 1 = print inventory
        case 0:
            console.log("\t\t\t\t\tNumber of enemies remaining:", enemies.length, "\n\n");
            //generate a random number whereby 1/3 and 1/4 cause an enemy to appear
            let randEnemy = Math.floor(Math.random() * 100);
            if ((randEnemy % 3 === 0) || (randEnemy % 4 === 0)) {
                console.clear();
                splashPrompt();
                //choose an enemy
                let whichEnemy = getRndInteger(0, enemies.length);
                console.log(`${yellow}`, enemies[whichEnemy].name, `${resetC}`, "is here!  What would you like to do?");
                let stayRun = readLine.keyInSelect(fightOrRun);

                /*if they choose to fight*/
                if (stayRun === 0) {
                    do {
                        let enemyAttack = Math.floor(Math.random() * 100);
                        let myAttack = Math.floor(Math.random() * 100);

                        console.log(enemies[whichEnemy].name, `attacked with ${red}${enemyAttack}${resetC}!  You fought back with ${green}${myAttack}${resetC}!`);
                        if (enemyAttack > myAttack) {
                            let rndNum = Math.floor(Math.random() * enemies[whichEnemy].attackPower) + 1;  //no 0 damage, minimum is 1
                            HP = adjustHP(false, rndNum);
                            /*if (rndNum > HP) { alive = false; }*/
                            console.log("You lost", rndNum, "HP points →", `Your ${magenta}HP is at ${resetC}${HP}`, "\n");
                        } else {
                            let rndNum = Math.floor(Math.random() * 25);
                            enemies[whichEnemy].HP -= rndNum;
                        }
                    } while ((HP > 0) && (enemies[whichEnemy].HP > 0));

                    if (HP <= 0) {
                        HP = 0;
                        lifeArr = "💀💀💀💀💀";
                        console.clear();
                        console.log(`${red}${msgGameOver}${resetC}`, "\n\n");
                        console.log(`You were killed by ${red}`, enemies[whichEnemy].name, `${resetC}!!!`);
                        alive = false;
                    }
                    if (enemies[whichEnemy].HP <= 0) {
                        let randItemNum = getRndInteger(0, items.length);
                        let theItem = items.splice(randItemNum, 1);
                        itemsArray.push(theItem);
                        HP = adjustHP(true, 30);

                        console.log(`You defeated ${red}`, enemies[whichEnemy].name, `${resetC}!  You have been awarded ${green}30${resetC} HP and have been given: ${theItem}!`);
                        defeatedEnemies.push(enemies[whichEnemy].name);
                        enemies.splice(whichEnemy, 1);
                    }
                    break;
                } else if (stayRun === 1) {
                    //50% chance of escape: if random number >= 50 then escape
                    let randomEscape = Math.floor(Math.random() * 100);
                    if (randomEscape >= 50) {
                        console.clear();
                        splashPrompt();
                        console.log(`Whew!  That was close!  You narrowly escaped the wrath of ${yellow}`, enemies[whichEnemy].name, `${resetC}`, "\n");
                        break;
                    } else {
                        let enemyAttack = Math.floor(Math.random() * enemies[whichEnemy].attackPower);
                        HP = adjustHP(false, enemyAttack);
                        if (HP <= 0) {
                            HP = 0;
                            lifeArr = "💀💀💀💀💀";
                            console.clear();
                            console.log(`${red}${msgGameOver}${resetC}`, "\n\n");
                            console.log(`You were killed by ${red}`, enemies[whichEnemy].name, `${resetC}!!!`);
                            alive = false;
                        }
                        console.clear();
                        splashPrompt();
                        console.log(enemies[whichEnemy].name, `attacked with ${red}${enemyAttack}${resetC}!  You sustained ${red}${enemyAttack}${resetC} damage`);
                        break;
                    }
                    break;
                }
            } else {
                console.clear();
                splashPrompt();
                console.log("Nothing crazy going on right now.  Better keep walking ...\n");
            }
            break;
        case 1:
            console.clear();
            splashPrompt();
            if (itemsArray.length === 0) { console.log(`${magenta}There are no items in your inventory${resetC}`); }
            if (itemsArray.length > 0) { console.log(`${yellow}Items in your inventory:${resetC}`, itemsArray.join(", ")); }
            break;
        case -1:
            console.clear();
            splashPrompt();
            break;
    }
}

if (winner === true) {
    console.clear();
    console.log(msgWinner);
    console.log("Congrats!  You defeated:\n");
    for (let i = 0; i < defeatedEnemies.length; i++) {
        console.log(`${magenta}${defeatedEnemies[i]}${resetC},`);
    }
}