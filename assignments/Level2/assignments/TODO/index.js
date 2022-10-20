const cardContainer = document.getElementById("container");

//hold previous form element values for PUT
let prevTitle;
let prevDescription;
let prevPrice;
let prevImage;

/* overlay elements for edit form */
const overlayDIV = document.getElementById("overlay");
const addITEM = document.getElementById("ul_addITEM");
const overlayFormDIV = document.getElementById("overlay_form");

const exit = document.querySelector('.overlay_exit');
const exitAdd = document.querySelector('.overlay_exit2');

const cancelButton = document.getElementById("cancelButton");
const cancelButton2 = document.getElementById("cancelButton2");
const saveButton = document.querySelector('.save');

/* overlay elements for add item form */
const overlayDIVadd = document.getElementById("overlay2");
const overlayFormDIVadd = document.getElementById("overlay_form2");

/* default image */
const defaultImage = "https://i0.wp.com/shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png?w=1738&ssl=1";
// dallas image: https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/04/0b/60/reunion-tower.jpg?w=2000&h=-1&s=1

/* form elements */
const form = document.todo_add_edit;
const formAdd = document.form_add;

const formTitle = form.form_title;
const formTitle2 = formAdd.form_title2;

const formDescription = form.form_description;
const formDescription2 = formAdd.form_description2;

const formPrice = form.form_price;
const formPrice2 = formAdd.form_price2;

const formImage = form.form_image;
const formImage2 = formAdd.form_image2;

// hidden input to hold _id
const formItemID = form.itemID;

/* /* card elements 
const completedCheckbox = document.querySelector('.my_checkbox');
const cardTitle = document.getElementById("cardTitle"); */

/* show/hide overlay div */
const showEdit = () => {
    overlayDIV.style.visibility = "visible";
    overlayFormDIV.style.visibility = "visible";
    exit.style.visibility = "visible";
}

const showAdd = () => {
    overlayDIVadd.style.visibility = "visible";
    overlayFormDIVadd.style.visibility = "visible";
    exitAdd.style.visibility = "visible";
}

const hide = () => {
    exit.style.visibility = "hidden";
    exitAdd.style.visibility = "hidden";

    overlayDIV.style.visibility = "hidden";
    overlayDIVadd.style.visibility = "hidden";

    overlayFormDIV.style.visibility = "hidden";
    overlayFormDIVadd.style.visibility = "hidden";
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

            //populate form input textboxes with data
            formTitle.value = item.title; prevTitle = item.title;
            formDescription.value = item.description; prevDescription = item.description;
            formPrice.value = item.price; prevPrice = item.price;
            formImage.value = item.imgUrl; prevImage = item.imgUrl;
            formItemID.value = item._id;

            //show the form
            showEdit();
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
        .then(res => render(res.data)) //call render() to display data on DOM
        .catch(err => console.log(err))
}

// PART 2 - POST data
const createTodo = (e) => { //axios.post()
    e.preventDefault();

    const newTodo = {};

    newTodo.title = formTitle2.value;
    newTodo.description = (formDescription2.value === '') ? "No description." : formDescription2.value;
    newTodo.imgUrl = (formImage2.value === '') ? defaultImage : formImage2.value;
    newTodo.price = (formPrice2.value === '') ? 0 : parseInt(formPrice2.value);

    axios.post("https://api.vschool.io/michaelhardin/todo", newTodo)
        .then(res => {
            console.assert(res);
            console.log("POSTED");
            formAdd.reset();
            getTodo();
        })
        .catch(err => console.log(err))
}

// PART 3 - PUT data
const updateTodo = (e) => { //axios.put()
    e.preventDefault();

    const updatedTodo = {};

    let item_id = formItemID.value; console.log(item_id, '\n\n');
    updatedTodo.title = formTitle.value;
    updatedTodo.description = (formDescription.value === '') ? "No description." : formDescription.value;
    updatedTodo.imgUrl = (formImage.value === '') ? defaultImage : formImage.value;
    updatedTodo.price = (formPrice.value === '') ? 0 : parseInt(formPrice.value);

    axios.put(`https://api.vschool.io/michaelhardin/todo/${item_id}`, updatedTodo)
        .then(res => {
            console.log(`UPDATED: ${item_id}`);
            form.reset();

            getTodo();
        })
        .catch(err => console.log(err))
}

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

/* checkbox PUT function */
const updateCompleted = (id, bool) => {
    const checkedTodo = {};

    checkedTodo.completed = (bool) ? true : false;

    axios.put(`https://api.vschool.io/michaelhardin/todo/${id}`, checkedTodo)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

// + add Item opens add form
addITEM.addEventListener('click', showAdd);

// close overlays for add form and edit form
exit.addEventListener('click', hide);
exitAdd.addEventListener('click', hide);

//hitting cancel button clears form and hides overlay
cancelButton.addEventListener('click', () => {
    form.reset();

    hide();
});

cancelButton2.addEventListener('click', () => {
    formAdd.reset();

    hide();
});

form.addEventListener('submit', updateTodo);

formAdd.addEventListener('submit', createTodo);

getTodo();