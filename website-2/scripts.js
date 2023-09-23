// Complete the function
let userInput =document.getElementById('newTask')
function addItem() {
    // Get the user input
    let newItemText = userInput.value

    // Check if the input is empty. If it is empty, return a alert that says, "Please enter an item"
    if (newItemText ===""){
        return alert('Please enter an item')
    }
    //add your code here

    // Create a new list item element
    let listItem = document.createElement('li')
    
    // Set the text content of the new list item
    listItem.textContent = newItemText;

    // Get the list where we want to add the new item
    let itemList = document.getElementById('taskList')

    // Append the new list item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    document.getElementById("newItem").value = "";
}

document.getElementById("addButton").addEventListener("click", addItem);