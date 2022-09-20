const student = {
    name: "Mike Hardin",
    age: 37,
    course: "Full Stack JavaScript",
    relationship: [
        {
            married: true,
            dateMarried: "September 15, 2022",
            spouse: "Lauren"
        },
        {
            metInCity: "Denver",
            marriedInCity: "Castle Rock",
            liveInCity: "Denver"
        }
    ]
}

localStorage.setItem("name", "Michael Hardin");

const personName = localStorage.getItem("name");

console.log("Name:", personName);

/* JSON - Javascript Object Notation
    // JSON.stringify => turning JS into JSON
    // JSON.parse => Turns JSON into JS */

localStorage.student = JSON.stringify(student);

const studentInfo = JSON.parse(localStorage.student);

console.log(studentInfo["relationship"][0].spouse);

document.body.textContent = studentInfo["relationship"][0].dateMarried;