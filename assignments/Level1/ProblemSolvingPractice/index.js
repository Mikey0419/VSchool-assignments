const numArray1 = [40, 50, 1, -4, 33, 120, 4];
const numArray2 = [100000, 990, -1, -4, -433, 20, 45550];
const numArray3 = [-40, -50, -1, -4, -33, -120, -84];

const wordArray = ["$hello!", "%%^%%", "test!", "michael", "dog1", "lob!ster"];

const red = '\x1b[31m'
const resetC = '\x1b[0m'

const largest = (arr) => {
    console.log("\nSearching for largest number in: \n", arr, "\n");
    arr.sort(function(a, b) {
        return b - a;
    })

    console.log("Largest number is: ", arr[0], "\n");
}

const lettersWithStrings = (arr, ch) => {
    let count = 0;
    console.log("\nSearching", arr, `for character [${red}`, ch, `${resetC}]`,"\n");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            //go through each char and see if ch === arr[i][j]
            if (ch === arr[i][j]) {
                let charIndex = arr[i].indexOf(ch); //need to grab index of ch in word
                let tempArray = arr[i]; //will use tempArray to slice up arr[i] contents

                let string1 = tempArray.slice(0, charIndex); //grab characters leading up to - but not including - ch
                let string2 = tempArray.slice(charIndex + 1); //grab rest of letters after ch
                let string3 = string1 + `${red}` + ch + `${resetC}` + string2; //concat strings with emphasized ch

                console.log("\t\t", string3);
                ++count;
                break;
            }
        }
    }
    if (count === 0) { console.log(`${red}No matches found.${resetC}`, "\n"); }
}

const isDivisible = (num1, num2) => {
    (num1 % num2 === 0) ? console.log(`Yes, ${num1} is divisible by ${num2}`) : console.log(`No, ${num1} is not divisible by ${num2}`);
}

console.clear();

largest(numArray1);
lettersWithStrings(wordArray, "!");

largest(numArray2);
lettersWithStrings(wordArray, "4");

isDivisible(4,2);
isDivisible(5,3);