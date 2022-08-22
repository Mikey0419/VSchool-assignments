const form = document["my-form"];

// Submit event

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(form["text-value"].value);

    form["text-value"].value = "";
})