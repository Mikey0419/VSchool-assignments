
/* overlay elements */
const overlayDIV = document.getElementById("overlay");
const addITEM = document.getElementById("ul_addITEM");
const overlayFormDIV = document.getElementById("overlay_form");
const exit = document.querySelector('.overlay_exit');
const cancelButton = document.getElementById("cancelButton");

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

// list data
const render = () => {}

// PART 1 - GET data
const getTodo = () => {} //axios.get()

// PART 2 - POST data
const createTodo = () => {} //axios.post()

// PART 3 - PUT data
const updateTodo = () => {} //axios.put()

// PART 4 - DELETE data
const deleteTodo = () => {} //axios.delete()

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