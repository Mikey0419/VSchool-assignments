const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e);
    document.getElementById("list").appendChild(subItem);
    //console.log(subItem);
})

function createSubItem(e){
    //console.log("Subitem: ", e);
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input");
    subItem.textContent = subItemValue.value;
    const dropDown = createDropDown();
    subItem.append(dropDown);
    subItem.setAttribute("class", "sub-item");
    subItem.style.backgroundColor = dropDown.value;
    return subItem;
}

function createDropDown(e){
    //console.log("e is: ", e);

    const dropDown = document.createElement("select");

    for (let i = 0; i < colors.length; i++){
        var option = document.createElement("option");
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    }
    dropDown.addEventListener("change", function (e){
        console.log("e is: ", e.target.value);
        console.log("parent is: ", e.target.parentElement);
        e.target.parentElement.style.backgroundColor = e.target.value;
    })

    return dropDown;
}