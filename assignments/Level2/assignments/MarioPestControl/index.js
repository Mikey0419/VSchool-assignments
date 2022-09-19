const total = document.querySelector(".total");
const form = document["formCount"];

const bobElement = document.getElementById("bobomb");
const goombaElement = document.getElementById("goomba");
const cheepElement = document.getElementById("cheep");

const updateTotal = () => {
    let subTotal = 0;
    let bobOmbTotal = (isNaN(bobElement.value)) ? 0 : bobElement.value;
    let goombaTotal = (isNaN(goombaElement.value)) ? 0 : goombaElement.value;
    let cheepTotal = (isNaN(cheepElement.value)) ? 0 : cheepElement.value;

    subTotal = new Number(bobOmbTotal * 7 + goombaTotal * 5 + cheepTotal * 11);

    return subTotal;
}

bobElement.addEventListener("change", function() {
    total.textContent = "";
    let subTotal = updateTotal();

    total.textContent = subTotal;
})

goombaElement.addEventListener("change", function() {
    total.textContent = "";
    let subTotal = updateTotal();

    total.textContent = subTotal;
})

cheepElement.addEventListener("change", function() {
    total.textContent = "";
    let subTotal = updateTotal();

    total.textContent = subTotal;
})
