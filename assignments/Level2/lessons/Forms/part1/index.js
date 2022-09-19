const form = document["myForm"];
const para = document.getElementById("myP");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    para.append(form.input1.value);
    form.input1.value = "";
})