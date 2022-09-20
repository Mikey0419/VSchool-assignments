const clickCounter = document.getElementById("clickCount");
const countDownElement = document.getElementById("countDown");
const secondsElement = document.getElementById("timerSeconds");

let numExists = localStorage.getItem("clicks");

console.log(numExists);

let num = ((!isNaN(numExists)) && (numExists !== null)) ? numExists : (0, localStorage.setItem("clicks", 0));
let clickable = true;
let timelimit = 30;

const countDown = () => {
    if (timelimit === 0) {
        clickable = false;
        clearInterval(intervalID);
        countDownElement.style.color = "red";
        countDownElement.style.fontWeight = "bold";
        countDownElement.textContent = "Time is up!!!!";
    } else {
        secondsElement.textContent = timelimit;
        timelimit--;
    }
}

let intervalID = setInterval(countDown, 1000);

clickCounter.textContent = num;

document.addEventListener("click", () => {
    if (clickable === false) { return; }
    console.log("clicked.");
    num++;

    localStorage.setItem("clicks", num);
    clickCounter.textContent = num;
})