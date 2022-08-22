const h1 = document.getElementById("clickable");
const birds = ["robin", "pelican", "goose"];

/* const bigBirds = birds.map(bird => {
    return "big " + bird
}) 

this is an arrow function

*/

const bigBirds = birds.map(bird => "big" + bird); //implicit


/* function addTwo(first, second){
    return first + second
} */

addTwo = (first, second) => {
    return first + second;
}

h1.addEventListener("click", () => {
    h1.textContent = "clicked";
    alert(addTwo(1,4));
})