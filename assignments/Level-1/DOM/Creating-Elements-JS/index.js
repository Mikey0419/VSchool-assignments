let newElement = document.createElement("li");
newElement.textContent = "3";
//var tempElement = "";

document.querySelector("#my-list").appendChild(newElement);

for (var i = 4; i < 10; i++) {
    var tempElement = document.createElement("li");
    tempElement.textContent = i;
    document.querySelector("#my-list").appendChild(tempElement);

    console.log("Added ", tempElement, ".");
}