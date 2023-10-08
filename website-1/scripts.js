// ********************** Exercise 1 ********************** //
// Use JavaScript to change the text inside the <h1> element to "DOM Updates".

let headingElement = document.getElementById("heading");
headingElement.textContent = "DOM Updates";





// ********************** Exercise 2 ********************** //
// In the last div, use innerHTML to replace all of the content with a span tag that has the text 'Hello World'.

let changeTag = document.querySelector(`#test`);
changeTag.innerHTML = "<span>Hello World</span>";
console.log(changeTag);


//let newSpan = document.createElement(`span`);

//changeTag = newSpan;





// ********************** Exercise 3 ********************** //
// Add a new list item to the <ul> element with the ID "list".

let listItem = document.querySelector(`#list`);
let newListItem= document.createElement("li");
let liContent = document.createTextNode("test");
newListItem.appendChild(liContent);
document.body.insertBefore(newListItem, listItem);






// ********************** Exercise 4 ********************** //
// Change the background color of the <div> element with the ID "container" to blue.
document.getElementById("container").style.color = "blue";