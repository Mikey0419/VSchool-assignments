const list = document.getElementById("list");
const form = document["addItem"];
const items = document.querySelectorAll('li div');
console.log(items);

const itemArray = [...items];

for (let i = 0; i<items.length; i++) {
    console.log(itemArray[i].innerHTML);
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
})