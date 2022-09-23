let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

/*


1. Returns a list of everyone older than 18, which is
2. sorted alphabetically by last name, and where
3. each name and age is embedded in a string that looks like an HTML `<li>` element.

*/

function sortedOfAge(arr){
    //must be over 18
    //arr.filter grabs all over 18 | .sort sorts by last name | .map adds <li></li> to each item -> arr.filter().sort().map()
    const resultOfAge = arr.filter(item => item.age >= 18).sort((a, b) => (a.lastName > b.lastName) ? 1 : -1).map(item => `<li>${item.firstName} ${item.lastName} is ${item.age}</li>`);
    //resultOfAge.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
    //const finalList = resultOfAge.map(item => `<li>${item.firstName} ${item.lastName} is ${item.age}</li>`);
    return resultOfAge;
}

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/


