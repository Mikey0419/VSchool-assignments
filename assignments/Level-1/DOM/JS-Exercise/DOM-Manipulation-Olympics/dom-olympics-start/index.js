/* global */

let clearButton = document.getElementById("clear-button");
let messages = document.getElementsByClassName("message");
var dropdownValue = document.querySelector("#theme-drop-down");
var previousMessageClassName = "";

/* BRONZE
    - Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
    - Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.
*/

const newMessages = ["Hey there 👋🏼", "Hey heyyyy", "Asl?", "Ohhh, gettin' all AIM on me 🥸"];

for (var i = 0; i < newMessages.length; i++) {
    messages[i].textContent = newMessages[i];
}

clearButton.addEventListener("click", function() {
    console.log('clear button clicked');
   /*  for(var i = 0; i < messages.length; i++) {
        //messages[i].textContent = "";
        //(messages[i].classList.contains("left")) ? messages[i].classList.remove("left") : messages[i].classList.remove("right");
        //messages[i].style.backgroundColor = "white";
    } */

    previousMessageClassName = messages[messages.length - 1].className; //"message pink", "message blue", "message green", or "message gray"

    var msg = "<div class='message'></div>";

    document.querySelector(".messages").innerHTML = msg;

    if(dropdownValue.value === "theme-one") {
        (previousMessageClassName === "message blue") ? document.querySelector(".message").className = "message pink" : document.querySelector(".message").className = "message blue";
    } else {
        (previousMessageClassName === "message green") ? document.querySelector(".message").className = "message gray" : document.querySelector(".message").className = "message green";
    }

    document.querySelector(".message").style.backgroundColor = "white";
    console.log("Previous class name = ", previousMessageClassName);
})

/* SILVER
    - Use the drop down to write some JavaScript that will notice when the drop down has changed and then changes the background colors of the messages accordingly.
    - Feel free to edit the HTML `<select>` tag to make it more usable or elaborate. Mo themes, mo fun.
*/

dropdownValue.addEventListener("change", function() {
    console.log(messages.length);

   if (dropdownValue.value == "theme-one") {
        for(var i = 0; i < messages.length; i++) {
            if (messages.length < 1) { break; } else {
            (messages[i].classList.contains("green")) ? messages[i].className =  "message pink" : messages[i].className = "message blue";
            }
        }
   } else {
        for(var i = 0; i < messages.length; i++) {
            if (messages.length < 1) { break; } else {
            (messages[i].classList.contains("pink")) ? messages[i].className = "message green" : messages[i].className = "message gray";
            }
        }
   }
})

/* GOLD 
    - Be able to add more messages using the form at the bottom.

    EXTRA CREDIT
    - Every other message will be posted on the right in one color, and the next on the left the other color.
*/

var theForm = document.getElementsByName("message");

document.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputValue = document.querySelector("#input");
    var newDiv = document.createElement("div");

    //(messages[messages.length - 1].classList.contains("blue")) ? newDiv.className = "message pink" : newDiv.className = "message blue";
    //(messages[messages.length - 1].classList.contains("green")) ? newDiv.className = "message gray" : newDiv.className = "message green";

    newDiv.textContent = inputValue.value;
    //if (messages.length > 1) { newDiv.className = messages[messages.length - 2].className; }

    if (messages.length == 1) { 
        var newMessageClassName;

        if (previousMessageClassName == "message pink") { newMessageClassName = "message blue"; }
        if (previousMessageClassName == "message blue") { newMessageClassName = "message pink"; }
        if (previousMessageClassName == "message green") { newMessageClassName = "message gray"; }
        if (previousMessageClassName == "message gray") { newMessageClassName = "message green"; }

        console.log("Previous color: ", previousMessageClassName, " | New color: ", newMessageClassName);

        newDiv.className = newMessageClassName;

    } else if (messages.length == 2) { newDiv.className = previousMessageClassName; } else { newDiv.className = messages[messages.length - 2].className; }

    //(dropdownValue.value === "Pink & Blue") ? 

    document.querySelector(".messages").append(newDiv);
})