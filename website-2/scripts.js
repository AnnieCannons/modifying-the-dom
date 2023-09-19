// Complete the function

function addItem() {
    // Get the user input
    let newItemText = document.getElementById("newTask").value


    // Check if the input is empty. If it is empty, return a alert that says, "Please enter an item"
    
    if (newItemText === "") {
        alert ("Please enter an item") }
    
    

    // Create a new list item element
    var listItem =  document.createElement("li");

    // Set the text content of the new list item
    listItem.textContent = newItemText

    // Get the list where we want to add the new item
    var itemList = document.getElementById("taskList")

    // Append the new list item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    document.getElementById("newTask").value = "";
}