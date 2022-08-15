let newElement = document.createElement("li");
newElement.textContent = "3 // appended ↖︎";
//var tempElement = "";

document.querySelector("#my-list").appendChild(newElement);

for (var i = 4; i < 10; i++) {
    var tempElement = document.createElement("li");
    tempElement.textContent = i + " // loop'd ↖︎";
    document.querySelector("#my-list").appendChild(tempElement);

    console.log("Added ", tempElement, ".");
}

/**
 * Challenge:
 * 
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */

let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";

newParagraph.classList.add("paragraphStyle");

document.body.appendChild(newParagraph);