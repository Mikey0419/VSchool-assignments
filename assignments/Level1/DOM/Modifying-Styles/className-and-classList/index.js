// className

// classList **preferred**

var headerClassName = document.getElementById("header").className;
console.log("Class name: ", headerClassName);

var headerClassList = document.getElementById("header").classList;
console.log(headerClassList);

document.getElementById("header").classList.add("one", "two", "three","a","b", "c");
document.getElementById("header").classList.remove("three", "c");