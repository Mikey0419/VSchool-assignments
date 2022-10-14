//const { default: axios } = require("axios");

//const axios = require('axios').default;
let parentDIV = document.getElementById("container");
const element = document.querySelector('.itemDIV');

let prevTitle;
let prevDesc;
let prevImg;

let elementID;

const form = document.todoform;

const render = () => {
    axios("https://api.vschool.io/michaelhardin/todo")
        .then(res => res.data.map(item => {
            let el = document.createElement("div");
            el.classList.add("itemDIV");
            el.id = item._id;
            let HTML = `<p>${item.title}</p><img height='80' width='80' src=${item.imgUrl} /><br>`;

            el.innerHTML = HTML;
            parentDIV.append(el);

            el.addEventListener("click", (e) => {
                console.log(e.target.parentNode.childNodes[0]);

                form.style.visibility = "visible";
                console.log('clicked:', el.getAttribute("id"));
                elementID = el.getAttribute("id");

                form.title.value = item.title; prevTitle = item.title;
                form.description.value = item.description; prevDesc = item.description;
                form.imgUrl.value = item.imgUrl; prevImg = item.imgUrl;
            })
        }))
        .catch(err => console.log(err))
}

const update = (id) => {
    const newITEM = {};

    console.log(`Previous Title: ${prevTitle}, Previous Image: ${prevImg}\n`);

    if (prevTitle !== form.title.value) { newITEM.title = form.title.value; }
    if (prevDesc !== form.description.value) { newITEM.description = form.description.value; }
    if (prevImg !== form.imgUrl.value) { newITEM.imgUrl = form.imgUrl.value; }


    console.log(newITEM);

    axios.put(`https://api.vschool.io/michaelhardin/todo/${id}`, newITEM)
        .then(res => {
            console.log(res);

            const elements = document.querySelectorAll('.itemDIV');
            for (let i = 0; i < elements.length; i++) {
                elements[i].remove();
            }

            form.title.value = '';
            form.description.value = '';
            form.imgUrl.value = '';
            form.style.visibility = "hidden";

            getTodo();
        })
        .catch(err => console.log(err))
}

render();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(prevTitle === form.title.value);
    console.log(prevDesc === form.description.value);
    console.log(prevImg === form.imgUrl.value);

    if ((prevTitle === form.title.value) && (prevDesc === form.description.value) && (prevImg === form.imgUrl.value)) {
        console.log('No changes made');

        form.title.value = '';
        form.description.value = '';
        form.imgUrl.value = '';
        form.style.visibility = "hidden";

        return;
    } else { update(elementID) }
})