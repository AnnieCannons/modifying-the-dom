// ********************** Exercise 1 ********************** //
// Use JavaScript to change the text inside the <h1> element to "DOM Updates".

document.getElementById('heading').innerHTML ='DOM Updates '





// ********************** Exercise 2 ********************** //
// In the last div, use innerHTML to replace all of the content with a span tag that has the text 'Hello World'.

document.querySelector('div:nth-child(3)').innerHTML='<span> Hello World</span>'





// ********************** Exercise 3 ********************** //
// Add a new list item to the <ul> element with the ID "list".

let newListItem = document.createElement('li');
let list = document.querySelector('ul')
newListItem.textContent='item 4'
list.appendChild(newListItem)



// ********************** Exercise 4 ********************** //
// Change the background color of the <div> element with the ID "container" to blue.
document.getElementById('container').style.backgroundColor='blue'