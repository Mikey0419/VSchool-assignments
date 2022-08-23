const list = document.getElementById("list");
const form = document["addItem"];
const items = document.querySelectorAll('li div');
const saveButton = document.querySelector('.edit');

const createInput = e => {
    console.log(e.target.parentNode);
    var inputElement = document.createElement("INPUT");
    inputElement.setAttribute("type", "text");

    alert(e.target.parentNode.childNodes[1].textContent);

    var divElement = e.target.parentNode.childNodes[1];
    divElement.hidden = true;

    inputElement.value = divElement.textContent;
    e.target.parentNode.prepend(inputElement);

    inputElement.addEventListener("blur", () => {
    divElement.textContent = inputElement.value;
    
    divElement.hidden = false;
    e.target.parentNode.removeChild(inputElement);
    saveButton.textContent = "edit";
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var newItem = "<li> \
    <div>" + form.title.value + "</div> \
    <button class='edit'>edit</button> \
    <button class='delete' id='remove'>X</button> \
    </li>"

    list.innerHTML += newItem;
    form.title.value = "";
})

list.addEventListener("click", (e) => {
    if (e.target.matches('.delete')) {
        console.log(e.target.parentNode, ": deleted.");
        list.removeChild(e.target.parentNode); }
    
    if (e.target.matches('.edit')) {
        if (e.target.textContent == "edit") {
            e.target.textContent = "save";
            createInput(e); }
        else { console.log("saved."); }
    }
})