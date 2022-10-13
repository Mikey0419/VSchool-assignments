//const { default: axios } = require("axios");

//const axios = require('axios').default;
let parentDIV = document.getElementById("container");
const element = document.querySelector('.itemDIV');

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

            el.addEventListener("click", () => {
                console.log('clicked', el.getAttribute("id"));
            })
        }))}

render();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = form.title.value;
    let desc = form.description.value;
    let img = form.imgUrl.value;

    const newITEM = {
        title: title,
        description: desc,
        imgUrl: img
    }

    axios.post("https://api.vschool.io/michaelhardin/todo", newITEM)
        .then(res => {
            console.log(res);

            const elements = document.querySelectorAll('.itemDIV');
            for (let i = 0; i < elements.length; i++) {
                elements[i].remove();
            }

            form.title.value = '';
            form.description.value = '';
            form.imgUrl.value = '';

            render();
        })
        .catch(err => console.log(err))
});