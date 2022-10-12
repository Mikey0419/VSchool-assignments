//const axios = require('axios').default;

let parentDIV = document.getElementById("container");

axios("https://api.vschool.io/michaelhardin/todo")
    .then(res => res.data.map(item => {
        let el = document.createElement("div");
        el.classList.add("itemDIV");
        let HTML = `<p>${item.title}</p><img height='80' width='80' src=${item.imgUrl} /><br>`;
        
        el.innerHTML = HTML;
        parentDIV.append(el);
    }))