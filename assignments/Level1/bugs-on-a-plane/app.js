var form = document.forms["airline-form"];
var submit = document.getElementById("submit");
const diet = [];

function formAlert() {
    var firstName = form["firstName"].value;
    var lastName = form["lastName"].value;
    var age = form["age"].value;
    var gender = form["gender"].value;
    var location = form["travel-location"].value;

    if (form.elements["vegan"].checked) {
        console.log("Checked!");
        diet.push(document.getElementById("vegan").value);
    }

    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById("gluten").value);
    }

    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById("paleo").value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);