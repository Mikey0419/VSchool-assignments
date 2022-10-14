
const cardContainer = document.getElementById("container");

/* overlay elements */
const overlayDIV = document.getElementById("overlay");
const addITEM = document.getElementById("ul_addITEM");
const overlayFormDIV = document.getElementById("overlay_form");
const exit = document.querySelector('.overlay_exit');
const cancelButton = document.getElementById("cancelButton");

/* default image */
const defaultImage = "https://i0.wp.com/shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png?w=1738&ssl=1";

/* form elements */
const form = document.todo_add_edit;
const formTitle = form.form_title;
const formDescription = form.form_description;
const formPrice = form.form_price;
const formImage = form.form_image;

/* card elements */
const completedCheckbox = document.querySelector('.my_checkbox');
const cardTitle = document.getElementById("cardTitle");

/* show/hide overlay div */
const show = () => {
    overlayDIV.style.visibility = "visible";
    overlayFormDIV.style.visibility = "visible";
    exit.style.visibility = "visible";
}

const hide = () => {
    exit.style.visibility = "hidden";
    overlayDIV.style.visibility = "hidden";
    overlayFormDIV.style.visibility = "hidden";
}

// create DOM elements and display on screen
const render = (data) => {
    data.map(item => {
        console.log("rendering", item.imgUrl, item.price, item.title);
    //create the card div and add class 'card'
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    //create image for card div and assign data imgUrl
    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", item.imgUrl);

    //create the card_text div and add class 'card_text'
    const cardTextDiv = document.createElement("div");
    cardTextDiv.classList.add('card_text');

    //create h2 element, add 'cardTitle' id and add data item title 
    const cardTitleH2 = document.createElement("h2");
    cardTitleH2.setAttribute("id", "cardTitle");
    cardTitleH2.textContent = item.title;

    //create p element, add 'cardDescription' id and add data description
    const cardDescP = document.createElement("p");
    cardDescP.setAttribute("id", "cardDescription");
    cardDescP.textContent = item.description;

    //create p element, add class 'price' and set data price
    const cardPriceP = document.createElement("p");
    cardPriceP.classList.add('price');
    cardPriceP.textContent = `$${item.price}`;

    /// create input checkbox
    const cardCheckbox = document.createElement("input");
    cardCheckbox.setAttribute("type", "checkbox");
    cardCheckbox.classList.add('my_checkbox');
    cardCheckbox.setAttribute("name", "completed");

    /// create label for input checkbox
    const labelForCheckbox = document.createElement("label");
    labelForCheckbox.setAttribute("for", "completed");
    labelForCheckbox.textContent = 'Completed';

    //create the card_buttons div and add class 'card_buttons'
    const cardButtonsDiv = document.createElement("div");
    cardButtonsDiv.classList.add('card_buttons');

    /// create edit button
    const editButton = document.createElement("button");
    editButton.classList.add('edit');
    editButton.setAttribute("id", item._id);

    /// create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add('delete');
    deleteButton.setAttribute("id", item._id);

    ///create edit icon
    const editIcon = "<span class='icon-edit-pencil'></span> EDIT";

    ///create delete icon
    const deleteIcon = "<span class='icon-bin2'></span> DELETE";

    /// append icons to buttons
    editButton.innerHTML = editIcon;
    deleteButton.innerHTML = deleteIcon;

    // add event listeners to respective buttons

    deleteButton.addEventListener('click', () => {
        console.log(`DELETE: ${item._id}`);
    })

    editButton.addEventListener('click', () => {
        console.log(`EDIT: ${item._id}`);
    })

    cardCheckbox.addEventListener('click', () => {
        (cardCheckbox.checked) ? (cardTitleH2.style.textDecoration = "line-through") : (cardTitleH2.style.textDecoration = "none");
    })

    cardTextDiv.append(cardTitleH2)
    cardTextDiv.append(cardDescP)
    cardTextDiv.append(cardPriceP)
    cardTextDiv.append(cardCheckbox)
    cardTextDiv.append(labelForCheckbox)

    cardButtonsDiv.append(editButton)
    cardButtonsDiv.append(deleteButton)

    cardDiv.append(cardImg)
    cardDiv.append(cardTextDiv)
    cardDiv.append(cardButtonsDiv)

    cardContainer.append(cardDiv);})
}

// PART 1 - GET data
const getTodo = () => {
    axios.get("https://api.vschool.io/michaelhardin/todo")
        .then(res => {
            console.log(res.data);
            render(res.data); })
        .catch(err => console.log(err))
} //axios.get()

// PART 2 - POST data
const createTodo = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const newTodo = {};

        newTodo.title = formTitle.value;
        newTodo.description = (formDescription.value === '') ? "No description." : formDescription.value;
        newTodo.imgUrl = (formImage.value === '') ? defaultImage : formImage.value;
        newTodo.price = (formPrice.value === '') ? "0" : formPrice.value;
    
        axios.post("https://api.vschool.io/michaelhardin/todo", newTodo)
            .then(res => {
                console.log(res);
    
                const elements = document.querySelectorAll('.card');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].remove();
                }
    
                formTitle.value = '';
                formDescription.value = '';
                formImage.value = '';
                formPrice.value = '';

                hide();
    
                getTodo();
            })
            .catch(err => console.log(err))
    });
} //axios.post()

// PART 3 - PUT data
const updateTodo = () => {} //axios.put()

// PART 4 - DELETE data
const deleteTodo = (id) => {
    axios.delete(`https://api.vschool.io/michaelhardin/todo/${id}`)
    .then(res => {
        console.log(res); //log deletion in console

        const elements = document.querySelectorAll('.card'); //remove elements from screen
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }

        render();
    })
    .catch(err => console.log(err))
}

/* DOM interaction */

completedCheckbox.addEventListener('click', () => {
    (completedCheckbox.checked) ? (cardTitle.style.textDecoration = "line-through") : (cardTitle.style.textDecoration = "none");
})

addITEM.addEventListener('click', () => {
    show();
});

exit.addEventListener('click', () => {
    hide();
});

cancelButton.addEventListener('click', () => {
    formTitle.value = '';
    formDescription.value = '';
    formPrice.value = '';
    formImage.value = '';
    hide();
})

getTodo();