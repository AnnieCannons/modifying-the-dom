// ********************** Exercise 1 ********************** //
// Use JavaScript to change the text inside the <h1> element to "DOM Updates".

document.getElementById("heading").textContent = "Dom Updates";


// ********************** Exercise 2 ********************** //
// In the last div, use JavaScript to change the paragraph element to a span element.

let text = document.querySelector(".lastDiv p")

let newElement = document.createElement("span")

text.parentNode.replaceChild(newElement, text)


// ********************** Exercise 3 ********************** //
// Add a new list item to the <ul> element with the ID "list".

const newItem = document.createElement("li");
newItem.textContent = "Item 4";
document.getElementById("list").appendChild(newItem);


// ********************** Exercise 4 ********************** //
// Console log the value the user types into the input field.



// ********************** Exercise 4 ********************** //
// Change the background color of the <div> element with the ID "container" to blue.
document.getElementById("container").style.backgroundColor = 'lightblue'