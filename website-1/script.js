// ********************** Exercise 1 ********************** //
// Use JavaScript to change the text inside the <h1> element to "DOM Updates".

let headerElement = document.getElementById("heading");
headerElement.textContent = "DOM Updates";

console.log(headerElement.textContent);
























// ********************** Exercise 2 ********************** //
// In the last div, use innerHTML to replace all of the content with a span tag that has the text 'Hello World'.

let lastDivElement = document.querySelector("div:last-of-type");
lastDivElement.innerHTML = "<span>Hello World</span>";

console.log(lastDivElement.innerHTML);

























// ********************** Exercise 3 ********************** //
// Add a new list item to the <ul> element with the ID "list".

let ulElement = document.getElementById("list");
let newListItem = document.createElement("li");
newListItem.textContent = "New Item";
ulElement.appendChild(newListItem);

console.log(ulElement.innerHTML);























// ********************** Exercise 4 ********************** //
// Change the background color of the <div> element with the ID "container" to blue.

let  container = document.getElementById("container");
container.style.backgroundColor = "blue";

console.log(container);






















