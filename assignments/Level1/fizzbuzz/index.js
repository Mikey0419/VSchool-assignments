const count = {
    fizz: 0,
    buzz: 0,
    fizzbuzz: 0
}

const numArr = [];

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            numArr.push("FIZZBUZZ");
            ++count["fizzbuzz"];
        } else {
            numArr.push("Fizz");
            ++count["fizz"];
        }
    } else if (i % 5 === 0) {
        numArr.push("Buzz");
        ++count["buzz"];
    } else { numArr.push(i); }
}

console.clear();
console.log(numArr.join(""),"\n");

console.log(count);