/*
    Create a function which takes a number and a message as variables.
    Use setInterval and setTimeout to count down from that number to 0.
    When it reaches 0 it displays the message.
    Both the numbers and the message will be shown on the HTML document
    When it reaches 0 have it stop counting.
*/

const element = document.getElementById("bodyParagraph");
let num = 10;
let msg = "Hooray!";

const countDown = () => {
    (num === 0) ? (element.textContent = msg, clearInterval(intervalID)) : (element.textContent = num, num--);
}

const intervalID = setInterval(countDown, 1000);