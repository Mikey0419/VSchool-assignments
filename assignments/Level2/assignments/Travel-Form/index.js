/* You should collect the following information from the user:

- First name (text input)
- Last name (text input)
- Age (number input)
- Gender (radio buttons with 2 or more options)
- Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
- Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

Each element of the form should be given a `name` attribute so you can access the data in JavaScript and do stuff with it.

There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this: */

var form = document["myform"];
var submit = document.getElementById("submit");
const diet = [];

function formAlert() {
    var firstName = form["firstName"].value;
    var lastName = form["lastName"].value;
    var age = form["age"].value;
    var gender = form["gender"].value;
    var location = form["travel-location"].value;

    if (form.elements["vegan"].checked) {
        diet.push(document.getElementById("vegan").value);
    }

    if (form.elements['vegetarian'].checked) {
        diet.push(document.getElementById("vegetarian").value);
    }

    if (form.elements['keto'].checked) {
        diet.push(document.getElementById("keto").value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\n");
}


submit.addEventListener("click", formAlert);