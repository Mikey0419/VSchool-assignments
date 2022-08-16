var powerRangers = [
    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]

var list = document.querySelector("#orderedList");

for (var i = 0; i < powerRangers.length; i++) {
   var tempListItem = document.createElement("li");
   tempListItem.textContent = powerRangers[i].name + "  [" + powerRangers[i].color + " ranger]";
   console.log("adding ", tempListItem);
   list.append(tempListItem);
}