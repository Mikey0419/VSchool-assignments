//const { default: axios } = require("axios");

let createTrue = true;

const cardContainer = document.getElementById("container");

//hold previous form element values for PUT
let prevTitle;
let prevDescription;
let prevPrice;
let prevImage;

/* overlay elements */
const overlayDIV = document.getElementById("overlay");
const addITEM = document.getElementById("ul_addITEM");
const overlayFormDIV = document.getElementById("overlay_form");
const exit = document.querySelector('.overlay_exit');
const cancelButton = document.getElementById("cancelButton");
const saveButton = document.querySelector('.save');

/* default image */
const defaultImage = "https://i0.wp.com/shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png?w=1738&ssl=1";

/* form elements */
const form = document.todo_add_edit;
const formTitle = form.form_title;
const formDescription = form.form_description;
const formPrice = form.form_price;
const formImage = form.form_image;

/* /* card elements 
const completedCheckbox = document.querySelector('.my_checkbox');
const cardTitle = document.getElementById("cardTitle"); */

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

    //remove all elements first
    const elements = document.querySelectorAll('.card');
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }

    data.map(item => {

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
        (item.completed) ? (cardTitleH2.style.textDecoration = "line-through") : (cardTitleH2.style.textDecoration = "none");

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
        console.log(`item completed: ${item.completed}`);
        if (item.completed) {
            cardCheckbox.checked = true;
        } else { cardCheckbox.checked = false; }

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

            deleteTodo(item._id);
        })

        editButton.addEventListener('click', () => {
            console.log(`EDIT: ${item._id}`);

            saveButton.removeEventListener('click', createTodo);

            //populate form input textboxes with data
            formTitle.value = item.title; prevTitle = item.title;
            formDescription.value = item.description; prevDescription = item.description;
            formPrice.value = item.price; prevPrice = item.price;
            formImage.value = item.imgUrl; prevImage = item.imgUrl;

            //show the form
            show();

            //add event listener for form submit to call updateTodo(id)
            saveButton.addEventListener('click', function () { updateTodo(item._id) });
                /* e.preventDefault();

                console.log("SUBMIT EDIT");
                //see if input values are different --> if so, PUT new values in
                if((prevTitle === formTitle.value) && (prevDescription = formDescription.value) && (prevPrice === formPrice.value) && (prevImage === formImage.value)) {
                    console.log(`No changes made to id ${item._id}: values are the same.`);
                    form.reset();
                    
                    return;
                } else {
                    console.log(`**UPDATING ${item._id} **`);
                    updateTodo(item._id);
                    //form.removeEventListener('submit', updateTodo);
                } */
        })

        cardCheckbox.addEventListener('click', () => {
            (cardCheckbox.checked) ? (cardTitleH2.style.textDecoration = "line-through", updateCompleted(item._id, true)) : (cardTitleH2.style.textDecoration = "none", updateCompleted(item._id, false));
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

        cardContainer.append(cardDiv);
    })
}

// PART 1 - GET data
const getTodo = () => {
    hide();

    axios.get("https://api.vschool.io/michaelhardin/todo")
        .then(res => render(res.data))
        .catch(err => console.log(err))
}

// PART 2 - POST data
const createTodo = () => {
    const newTodo = {};

    newTodo.title = formTitle.value;
    newTodo.description = (formDescription.value === '') ? "No description." : formDescription.value;
    newTodo.imgUrl = (formImage.value === '') ? defaultImage : formImage.value;
    newTodo.price = (formPrice.value === '') ? 0 : parseInt(formPrice.value);

    axios.post("https://api.vschool.io/michaelhardin/todo", newTodo)
        .then(res => {
            console.log("POSTED");
            form.reset();
            getTodo();
        })
        .catch(err => console.log(err))
} //axios.post()

// PART 3 - PUT data
const updateTodo = (id) => {
    const updatedTodo = {};

    updatedTodo.title = formTitle.value;
    updatedTodo.description = (formDescription.value === '') ? "No description." : formDescription.value;
    updatedTodo.imgUrl = (formImage.value === '') ? defaultImage : formImage.value;
    updatedTodo.price = (formPrice.value === '') ? 0 : parseInt(formPrice.value);

    axios.put(`https://api.vschool.io/michaelhardin/todo/${id}`, updatedTodo)
        .then(res => {
            console.log("UPDATED");
            form.reset();

            getTodo();
        })
        .catch(err => console.log(err))
} //axios.put()

// PART 4 - DELETE data
const deleteTodo = (id) => {
    axios.delete(`https://api.vschool.io/michaelhardin/todo/${id}`)
    .then(res => {
        console.log("DELETED"); //log deletion in console
        getTodo();
    })
    .catch(err => console.log(err))
}

/* DOM interaction */

/* completedCheckbox.addEventListener('click', () => {
    (completedCheckbox.checked) ? (cardTitle.style.textDecoration = "line-through") : (cardTitle.style.textDecoration = "none");
}) */

/* checkbox PUT function */
const updateCompleted = (id, bool) => {
    const checkedTodo = {};

    checkedTodo.completed = (bool) ? true : false;

    axios.put(`https://api.vschool.io/michaelhardin/todo/${id}`, checkedTodo)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

addITEM.addEventListener('click', () => {
    show();
    saveButton.removeEventListener('click', updateTodo);
    saveButton.addEventListener('click', createTodo);
})

exit.addEventListener('click', () => {
    hide();
});

//hitting cancel button clears form and hides overlay
cancelButton.addEventListener('click', () => {
    formTitle.value = '';
    formDescription.value = '';
    formPrice.value = '';
    formImage.value = '';

    form.reset();

    hide();
})

getTodo();