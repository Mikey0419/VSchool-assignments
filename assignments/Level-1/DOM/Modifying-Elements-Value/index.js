var inputValue = document.querySelector("#text-input");

inputValue.addEventListener("keypress", function(e) {
    //log the value if the 'Enter' button is pressed
    if(e.keyCode == 13) { console.log(inputValue.value); }
})