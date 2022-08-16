var squareElement = document.getElementById("element");

squareElement.addEventListener("mousemove", function() {
    //squareElement.style.backgroundColor = "blue";
    squareElement.className = "square blue";
    console.log("Event: hover | color: blue");
})

squareElement.addEventListener("mousedown", function() {
    //squareElement.style.backgroundColor = "blue";
    squareElement.className = "square red";
    console.log("Event: mousedown | color: red");
})

squareElement.addEventListener("mouseup", function() {
    //squareElement.style.backgroundColor = "blue";
    squareElement.className = "square yellow";
    console.log("Event: mouseup | color: yellow");
})

squareElement.addEventListener("dblclick", function() {
    //squareElement.style.backgroundColor = "blue";
    squareElement.className = "square green";
    console.log("Event: dblclick | color: green");
})

squareElement.addEventListener("mouseout", function() {
    //squareElement.style.backgroundColor = "blue";
    squareElement.className = "square";
    console.log("reset");
})

document.body.addEventListener("wheel", function() {
    //squareElement.style.backgroundColor = "blue";
    squareElement.className = "square orange";
    console.log("Event: wheel | color: orange");
})

document.addEventListener("keypress", function(e) {
    //squareElement.style.backgroundColor = "blue";
    var theCode = e.code;

    (theCode === "KeyO") ? (squareElement.className = "square orange", console.log("Event: keypress | color: orange")) :
    (theCode === "KeyG") ? (squareElement.className = "square green", console.log("Event: keypress | color: green")) :
    (theCode === "KeyR") ? (squareElement.className = "square red", console.log("Event: keypress | color: red")) :
    (theCode === "KeyY") ? (squareElement.className = "square yellow", console.log("Event: keypress | color: yellow")) :
    (theCode === "KeyB") ? (squareElement.className = "square blue", console.log("Event: keypress | color: blue")) : squareElement.className = "square";
})