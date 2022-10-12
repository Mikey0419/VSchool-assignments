// https://rickandmortyapi.com/api/character

// popular tool for making HTTP requests
// expands on XHR object
// promise based

const url = "https://rickandmortyapi.com/api/character";

fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(resJSON => resJSON.results.map(item => {
        let element = document.createElement("h5");
        let elementContent = `${item.id}) ${item.name} [${item.status}]`;

        element.textContent = elementContent;
        document.body.append(element);
    }))
    .catch(err => console.log("ERROR"))