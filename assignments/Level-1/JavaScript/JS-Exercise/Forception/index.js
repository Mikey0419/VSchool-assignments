var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const combined = [];

const newArray = (first, second) => {
    for (var i = 0; i < first.length; i++) {
        combined.push(first[i]);
        for (var j = 0; j < second.length; j++) {
            combined.push(second[j]);
        }
    }
}

newArray(people, alphabet);

console.log(combined.join(", "));