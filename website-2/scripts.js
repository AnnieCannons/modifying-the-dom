// Complete the function

function addItem() {
    // Get the user input
    let newItemText = document.getElementById("newitem").value;

    // Check if the input is empty. If it is empty, return a alert that says, "Please enter an item"
    
    //add your code here

    "Please enter an item"
    if (newItemText.trim() === '') {
        alert("Please enter an item");
        return;
    }

    // Create a new list item element
    var listItem = document.createElement("li") // add your code here

    
    // Set the text content of the new list item
    listItem.textContent = newItemText;

    // Get the list where we want to add the new item
    var itemList = document.getElementById("itemList");
    // add your code here

    // Append the new list item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    document.getElementById("newItem").value = "";
}

document.getElementById("addButton").addEventListener("click", addItem);