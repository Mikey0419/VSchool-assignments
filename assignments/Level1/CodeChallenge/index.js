const names = [ "Jerry", "Adam" ];

const person = {
    firstName: "Robert",
    lastName: "Jones",
    age: 37
}

names.unshift(person.firstName);
console.log(names);