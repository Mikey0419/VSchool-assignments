var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

/* count # of 'computer' in officeItems array */

  var count = 0;

  for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === 'computer') { ++count; }
  }

  console.log("Number of computers: ", count, "\n\n");

  /* Loop through the peopleWhoWantToSeeMadMaxFuryRoad array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18. */

genderReveal = (el) => {
    var gender = (el.gender === 'male') ? "HIM" : "HER";
    return gender;
}


  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    var personGender = genderReveal(peopleWhoWantToSeeMadMaxFuryRoad[i]);
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) { console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, "is old enough to see Mad Max: let", personGender, "in!"); }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) { console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, "is not old enough to see Mad Max: don't let", personGender, "in!"); }
}