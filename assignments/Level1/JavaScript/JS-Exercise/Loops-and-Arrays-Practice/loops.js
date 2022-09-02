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

/* Bonus challenge: The light is off to start with. Log to the console whether or not the light is on at the end (loop through array) */

var lightSwitch = "OFF";

const toggle1 = [2, 5, 435, 4, 3] // "The light is on"
const toggle2 = [1, 1, 1, 1, 3]   // "The light is on"
const toggle3 = [9, 3, 4, 2]      // "The light is off"

lightOperation = (el) => {
    for (var i = 0; i < el.length; i++) {
        for (var j = 0; j < el[i]; j++) {
            if (lightSwitch === "OFF") { lightSwitch = "ON"; } else { lightSwitch = "OFF"; }
            console.log('[',el[i],']: ',j,' = ',lightSwitch);
        }
    }
    lightSwitch = "OFF";
}

lightOperation(toggle3);
lightOperation(toggle2);
lightOperation(toggle1);