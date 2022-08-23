const list = document.getElementById("list");
const form = document["addItem"];
const items = document.querySelectorAll('li div'); //future consideration: placing DOM elements into an array
const saveButton = document.querySelector('.edit');

const createInput = e => {
    console.log(e.target.parentNode, " is being edited.");

    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");

    //e.target.parentNode.childNodes[1].textContent gives the <div> text 

    //var divElement = e.target.parentNode.childNodes[1];
    var divElement = e.target.parentNode.childNodes[0];

    divElement.hidden = true;

    inputElement.value = divElement.textContent;
    e.target.parentNode.prepend(inputElement);

    inputElement.addEventListener("blur", () => {
        divElement.textContent = inputElement.value;
    
        divElement.hidden = false;
        e.target.parentNode.removeChild(inputElement);
        e.target.textContent = 'edit';
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var listElement = document.createElement("li");

    var listElementContent = "<div>" + form.title.value + "</div><button class='edit'>edit</button><button class='delete' id='remove'>X</button>";

    listElement.innerHTML = listElementContent;

    var newItem = "<li> \
    <div>" + form.title.value + "</div> \
    <button class='edit'>edit</button> \
    <button class='delete' id='remove'>X</button> \
    </li>";

    //list.innerHTML += newItem;

    list.prepend(listElement);

    form.title.value = "";
})

list.addEventListener("mousedown", (e) => {
    if (e.target.matches('.delete')) {
        console.log(e.target.parentNode, ": deleted.");
        list.removeChild(e.target.parentNode); 
    }
    
    if (e.target.matches('.edit')) {
        if (e.target.textContent == "edit") {
            e.target.textContent = "save";
            createInput(e); 
        } else { 
            e.target.textContent = "save";
            console.log("saved."); }
    }
})