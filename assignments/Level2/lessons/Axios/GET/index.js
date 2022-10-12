const axios = require('axios').default;

axios("https://api.vschool.io/michaelhardin/todo")
    .then(res => res.data.map(item => {
        let HTML = `<div><p>${item.title}</p><br><img src="${item.imgUrl}" />`;
        console.log(HTML);
    }))