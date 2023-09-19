// Complete the function
// console.log("hello");
function addItem() {
    // Get the user input
    //Taking the text the user types into the form and saving in a variable
    let newItemText = document.getElementById("newTask").value;

    //checking to make sure the user typed into the input before clicking the button; if they did not, run the alert 
     if (newItemText === "") {
        alert("Please enter an item")
    }

    // Check if the input is empty. If it is empty, return a alert that says, "Please enter an item"
    
    //add your code here

    // Create a new list item element

   let listItem = document.createElement("li");
    //let textNode = document.createTextNode(newItemText);
    //listItem.appendChild(textNode);
    //document.getElementById("taskList").appendChild("li"); 
   // Set the text content of the new list item
    listItem.textContent = newItemText;
console.log(listItem.textContent);
    // Get the list where we want to add the new item
    let itemList = document.getElementById("taskList");
console.log(itemList);
    // Append the new list item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    document.getElementById("newTask").value = "";
}

document.getElementById("addButton").addEventListener("click", addItem);

