console.clear();

let intervalID;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min); //generates 0, 1, or 2

class Player {
    constructor(totalCoins = 0, status = 'Big', hasStar = false) {
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        let starMsg = (this.hasStar) ? "⭐️ You have a Star ⭐️\n" : '';
        console.log(`\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n${starMsg}`);
    }
    gotHit() {
        if (this.hasStar) {
            this.hasStar = false;
            console.log("Your star protected you!");
            return;
        }
        
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
        if(this.hasStar) { return; }

        switch (this.status) {
            case 'Powered up':
                this.hasStar = true;
                console.log("\t\t\tCongratulations!  You got a star!\n");
                break;
            case 'Big':
                this.status = 'Powered up';
                break;
            case 'Small':
                this.status = 'Big';
                break;
        }
    }
    setName = (namePicked) => this.name = namePicked;
}

const hero = new Player(0, 'Big', false);
hero.setName("Mario");
hero.print();

const play = () => {
    let num = getRandom(0, 3);

    switch(num) {
        case 0:
            //console.log("\t\t\tYou took a hit!");
            hero.gotHit();
            break;
        case 1:
            //console.log("\t\t\tPower up!");
            hero.gotPowerup();
            break;
        case 2:
            //console.log("\t\t\tMore coins!");
            hero.addCoin();
            break;
    }
    (hero.status === 'Dead') ? clearInterval(intervalID) : '';
    hero.print();
}

intervalID = setInterval(play, 1000);