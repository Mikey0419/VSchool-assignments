const form = document["my-form"];

// Submit event

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(form["text-value"].value);

    // create element, assign input value, and append to body

    const myParagraph = document.createElement("p");
    myParagraph.textContent = form["text-value"].value;
    document.getElementsByTagName("body")[0].append(myParagraph);

    form["text-value"].value = "";
})