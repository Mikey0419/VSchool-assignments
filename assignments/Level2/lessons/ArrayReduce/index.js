/*

.reduce()
    Returns: Whatever you want it to! (See video for explanation)
    Purpose: Take an array of data and Reduce it into a smaller or completely different data set.

*/

console.clear();

// .reduce()

// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result1 = nums.reduce(function(final, current) {
    //final is what is being created and what will be returned
    //current is the individual item that is being looped - the index

    final += current;

    return final;
}, 0)  //the value 0 is the second argument of .reduce().  It gives the starting value for 'final'

console.log(result1, '\n');


// 2 - reduce the users to an array of strings of the user's first and last names
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

const result2 = users.reduce(function(final, user){
    final.push(user.fName + " " + user.lName);

    return final;

}, []); //[] indicates that we want final to be an array

console.log(result2, '\n');



// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const counter = voters.reduce(function(final, current){
    (current.voted) ? final++ : '';

    return final;
}, 0)

console.log('\n Number of voters: ', counter, '\n\n\n');