// Complete the function
function addItem() {
    // Get the user input
    //Taking the test the user types into the form and saving it into a variable
    let newItemText = document.getElementById("newTask").value;

    // Check if the input is empty. If it is empty, return an alert that says, "Please enter an item"
    //checking to make sure the user typed into the input before clicking the button’ if they did not, run the alert
    if(newItemText.trim() === "") {
        alert("Please enter an item");
        return;
    }

    // Create a new list item element
    let listItem = document.createElement("li");

    // Set the text content of the new list item
    listItem.textContent = newItemText;

    // Get the list where we want to add the new item
    let itemList = document.getElementById("taskList");

    // Append the new list item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    document.getElementById("newTask").value = "";
}

document.getElementById("addButton").addEventListener("click", addItem);