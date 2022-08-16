var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]

var list = document.querySelector("#orderedList");

for (var i = 0; i < powerRangers.length; i++) {
   var tempListItem = document.createElement("li");
   tempListItem.textContent = powerRangers[i];
   console.log("adding ", tempListItem);
   list.append(tempListItem);
}