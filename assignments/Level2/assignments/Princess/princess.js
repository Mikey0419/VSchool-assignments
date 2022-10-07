console.clear();

let intervalID;

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
} //generates 0, 1, or 2

class Player {
    constructor(totalCoins, status, hasStar) {
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        let starMsg = (this.hasStar) ? "You have a Star\n" : '';
        console.log(`\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n${starMsg}`);
    }
    setName(namePicked) { this.name = namePicked; }
    gotHit() {
        (this.hasStar) ? (this.hasStar = false, console.log("Your star protected you!"), this.print()) : '';
        switch (this.status) {
            case 'Powered up':
                this.status = 'Big';
                break;
            case 'Big':
                this.status = 'Small';
                break;
            case 'Small':
                this.status = 'Dead';
                break;
        }
    }
    gotPowerup() {
        switch (this.status) {
            case 'Powered up':
                this.hasStar = true;
                console.log("Congratulations!  You got a star!");
                break;
            case 'Big':
                this.status = 'Powered up';
                break;
            case 'Small':
                this.status = 'Big';
                break;
        }
    }
}

const hero = new Player(0, 'Big', false);
hero.setName("Mario");

const play = () => {
    let num = getRandom(0, 3);

    switch(num) {
        case 0:
            console.log("\t\t\tYou took a hit!\n");
            hero.gotHit();
            break;
        case 1:
            console.log("\t\t\tPower up!\n");
            hero.gotPowerup();
            break;
        case 2:
            console.log("\t\t\tMore coins!\n");
            hero.addCoin();
            break;
    }
    (hero.status === 'Dead') ? clearInterval(intervalID) : '';
    hero.print();
}

intervalID = setInterval(play, 1500);