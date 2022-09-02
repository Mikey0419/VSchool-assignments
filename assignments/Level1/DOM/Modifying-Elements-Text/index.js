/**
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */

var item = document.querySelector("h1").textContent;

document.querySelector("p").textContent = item + " [grabbed from <h1>]";