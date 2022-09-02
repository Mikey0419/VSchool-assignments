const form = document["myForm"];

form.addEventListener("submit", e => {
    e.preventDefault();
    console.clear();

    var radioLength = form.entertainment.length;

    const checkedArray = [];

    for (let i = 0; i < radioLength; i++) {
        if(form.entertainment[i].checked) {/* true if checked, false if unchecked */
            checkedArray.push(form.entertainment[i].value);
        }
        form.entertainment[i].checked = false;
    }

    alert(checkedArray.length);

    console.log(checkedArray);
})