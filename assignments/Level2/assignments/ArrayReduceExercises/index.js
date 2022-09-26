console.clear();

const axios = require('axios').default;

/* ### **1) Turn an array of numbers into a total of all the numbers**


*/
function total(arr) {
   const result = arr.reduce(function(final, num) {
    final += num;

    return final;
   }, 0)

   return result;
}

console.log(total([1,2,3]), '\n'); // 6

/*

---

### **2) Turn an array of numbers into a long string of all those numbers.**


*/

function stringConcat(arr) {
   const result = arr.reduce(function(final, num) {
    final.push(num);

    return final;
   }, [])

   return result.join('');
}

console.log(stringConcat([1,2,3]), '\n'); // "123"

/*

---

### **3) Turn an array of voter objects into a count of how many people voted**

*/

function totalVotes(arr) {
   const result = arr.reduce(function(final, voter) {
    (voter.voted) ? final++ : '';

    return final;
   }, 0)

   return result;
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log("Total number of voters:", totalVotes(voters), '\n'); // 7


/*
> Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

*/

/*
### **4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once**
*/

function shoppingSpree(arr) {
   const result = arr.reduce(function(final, item) {
    final.titles.push(item.title);
    final.price += item.price;

    return final;

   }, { titles: [], price: 0})

   return result;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist), '\n'); // 227005

/*

### **5) Given an array of arrays, flatten them into a single array**
*/

function flatten(arr) {
    const result = arr.reduce(function(final, current) {
        return final.concat(current);
    }, [])

    return result;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

/*

> Note: Take a look at Array.concat() to help with this one
*/

/*
### **6) Given an array of potential voters, return an object representing the results of the vote**

Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
*/

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   const returnResult = arr.reduce(function(final, current){
    if (current.age < 30) {
        final.numYoungPeople++;
        if (current.voted) { final.numYoungVotes++; }
    }

    if ((current.age >= 30) && (current.age < 40)) {
        final.numMidsPeople++;
        if (current.voted) { final.numMidVotesPeople++; }
    }

    if (current.age > 40) {
        final.numOldsPeople++;
        if (current.voted) { final.numOldVotesPeople++; }
    }

    return final;
   }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0 })

   return returnResult;
}

console.log(voterResults(voters), '\n'); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/


/*
### **Extra credit**

Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be `https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos`.

Once you get the data, use `.reduce()` to figure out how many `watchers` you have across all of your repositories. Don't be too disappointed if the number is 0. You're still new at this :)

> Note: If you've learned how to use the axios library, you can do this in node. Otherwise, you'll want to run this code in the browser's JavaScript context and either use XMLHttpRequest or jQuery's AJAX methods, meaning you'll need an HTML page and an associated script tag for your JavaScript.
> */

axios.get("https://api.github.com/users/mikey0419/repos")
    .then(function (result) {
        const numberOfWatchers = result.data.reduce(function(final, current) {
            console.log(`Name: ${current.name} | Watchers: ${current.watchers}`);

            final += current.watchers;

            return final;
        }, 0)

        console.log('\n', "Total number of watchers: ", numberOfWatchers);
    })