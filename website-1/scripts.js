// ********************** Exercise 1 ********************** //
// Use JavaScript to change the text inside the <h1> element to "DOM Updates".
document.querySelector("h1").innerText = "DOM Updates";






// ********************** Exercise 2 ********************** //
// In the last div, use innerHTML to replace all of the content with a span tag that has the text 'Hello World'.
let lastDiv = document.getElementById('lastDiv');
lastDiv.innerHTML = '<span>Hello World</span>';






// ********************** Exercise 3 ********************** //
// Add a new list item to the <ul> element with the ID "list".
let list = document.getElementById("list");
let listItem = document.createElement("li"); 
listItem.textContent = "Item 4"; 
list.appendChild(listItem);







// ********************** Exercise 4 ********************** //
// Change the background color of the <div> element with the ID "container" to blue.
document.getElementById("container").style.backgroundColor = "blue";