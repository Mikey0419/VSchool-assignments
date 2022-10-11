let msg = document.createElement("h1");
let intervalID;
let indexer = 13;
let strMessage = "Fetching data .....";
document.body.append(msg);

const countUP = () => {
    if (indexer === strMessage.length - 1) {
        clearInterval(intervalID);
        intervalID = setInterval(countDOWN, 100);
    }
    msg.textContent = strMessage.slice(0, indexer);
    indexer++;
}

const countDOWN = () => {
    if (indexer === 15) {
        clearInterval(intervalID);
        intervalID = setInterval(countUP, 100);
    }
    msg.textContent = strMessage.slice(0, indexer);
    indexer--;
}

intervalID = setInterval(countUP, 100);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        clearInterval(intervalID);
        console.clear();
        document.body.removeChild(msg);
        const JSONresponse = xhttp.responseText;
        const data = JSON.parse(JSONresponse);

        showName(data);
    } else {
        console.log('Fetching data ...');
    }
};
xhttp.open("GET", "https://api.vschool.io/pokemon", true);
xhttp.send();


function showName(arr) {
    console.log(arr.objects[0].pokemon);
    arr.objects[0].pokemon.map((item, index) => {
        let newElement = document.createElement("p");
        let elementContent = `${index + 1}) ${item.name}`;

        newElement.append(elementContent);
        document.body.append(newElement);
    })
}