// ********************** Exercise 1 ********************** //
// Use JavaScript to change the text inside the <h1> element to "DOM Updates".

const h1Element = document.querySelector('h1');
h1Element.textContent = "DOM Updates";

// ********************** Exercise 2 ********************** //
// In the last div, use JavaScript to change the paragraph element to a span element.

const lastDivElement = document.querySelectorAll('div').item(document.querySelectorAll('div').length - 1);
lastDivElement.innerHTML = '<span>Hello World</span>';

// ********************** Exercise 3 ********************** //
// Add a new list item to the <ul> element with the ID "list".

const ulElement = document.getElementById('list');
const newListItem = document.createElement('li');
newListItem.textContent = 'New List Item';
ulElement.appendChild(newListItem);


// ********************** Exercise 4 ********************** //
// Console log the value the user types into the input field.

console.log(userTypes);


// ********************** Exercise 4 ********************** //
// Change the background color of the <div> element with the ID "container" to blue.

const ccontainerDiv = document.getElementById('container');
containerDiv.style.backgroundColor = 'blue';
