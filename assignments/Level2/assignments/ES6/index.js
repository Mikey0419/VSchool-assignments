/*
Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

John is the pet owner, and his name should be stored differently than the other names.
*/

console.clear();

const ownerName = "John";
let age = 101;

function runForLoop(pets) {
    let petObjects = [];

    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot";
        }
        console.log("pet name: ", name);
        pet.name = name;
        petObjects.push(pet);
    }
    console.log("man name: ", ownerName);
    return petObjects;
}

runForLoop(["cat", "dog"])

/*
# **ES6 Arrow Functions**

### **Task 1**

Re-write this `.map()` using an arrow function:

Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.
*/

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}

const obj = mapVegetables(carrots);

console.log(obj);

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => {
    return arr.filter((person) => {
        return person.friendly
    })
}

const friendlyObj = filterForFriendly(people);
console.log(friendlyObj);

const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

console.log(doMathSum(1, 5), '\n', produceProduct(10, 5));

const printString = (firstName, lastName, age) => console.log('\n', `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`, '\n');

printString("Mike", "Hardin", 37);

/* EXTRA CREDIT */

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => { return arr.filter(animal => { return (animal.type === "dog") ? true : false; }) };

 const animalObj = filterForDogs(animals);

 console.log(animalObj);