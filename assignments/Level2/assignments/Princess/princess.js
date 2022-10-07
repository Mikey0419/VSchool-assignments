console.clear();

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
} //generates 0, 1, or 2

class Player {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`Name: ${this.name}\n`);
    }
}

const hero = new Player("Luigi");

hero.print();