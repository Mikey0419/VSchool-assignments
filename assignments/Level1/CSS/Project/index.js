const button = document.querySelector(".button-53");

button.addEventListener("click", changeLocation(tag));

changeLocation = (tag) => {
    switch (tag) {
        case 'home':
            window.location.assign("./index.html");
            break;
        case 'about':
            window.location.assign("./about.html");
            break;
        case 'contact':
            window.location.assign("./contact.html");
            break;
    }
}