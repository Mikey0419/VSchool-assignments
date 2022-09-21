const total = document.querySelector(".total");
const form = document["formCount"];

const bobElement = document.getElementById("bobomb");
const goombaElement = document.getElementById("goomba");
const cheepElement = document.getElementById("cheep");

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

let subTotal = 0;
let prevTotal = 0;
total.textContent = 0;
let intervalID;

const coinSound = new sound("./coin.mp3");

const updateTotal = () => {
    let newTotal = 0;

    let bobOmbTotal = (isNaN(bobElement.value)) ? 0 : bobElement.value;
    let goombaTotal = (isNaN(goombaElement.value)) ? 0 : goombaElement.value;
    let cheepTotal = (isNaN(cheepElement.value)) ? 0 : cheepElement.value;

    newTotal = new Number(bobOmbTotal * 7 + goombaTotal * 5 + cheepTotal * 11);

    return newTotal;
}

function countUp () {
    if (prevTotal === subTotal) {
        clearInterval(intervalID);
        prevTotal = subTotal;
        return;
    } else {
        prevTotal++;
        total.textContent = prevTotal;
        coinSound.play();
    }
}

function countDown () {
    if (prevTotal === subTotal) {
        clearInterval(intervalID);
        prevTotal = subTotal;
        return;
    } else {
        prevTotal--;
        total.textContent = prevTotal;
        coinSound.play();
    }
}

bobElement.addEventListener("change", function() {
    total.textContent = "";
    subTotal = parseInt(updateTotal());
    console.log('Previous Total = ', prevTotal, 'Subtotal = ', subTotal);
    if (prevTotal < subTotal) { total.textContent = prevTotal; intervalID = setInterval(countUp, 1); }
    if (prevTotal > subTotal) { total.textContent = prevTotal; intervalID = setInterval(countDown, 1); }
    //total.textContent = subTotal;
})

goombaElement.addEventListener("change", function() {
    total.textContent = "";
    subTotal = parseInt(updateTotal());
    console.log('Previous Total = ', prevTotal, 'Subtotal = ', subTotal);
    if (prevTotal < subTotal) { total.textContent = prevTotal; intervalID = setInterval(countUp, 1); }
    if (prevTotal > subTotal) { total.textContent = prevTotal; intervalID = setInterval(countDown, 1); }
    //total.textContent = subTotal;
})

cheepElement.addEventListener("change", function() {
    total.textContent = "";
    subTotal = parseInt(updateTotal());
    console.log('Previous Total = ', prevTotal, 'Subtotal = ', subTotal);
    if (prevTotal < subTotal) { total.textContent = prevTotal; intervalID = setInterval(countUp, 1); }
    if (prevTotal > subTotal) { total.textContent = prevTotal; intervalID = setInterval(countDown, 1); }
    //total.textContent = subTotal;
})