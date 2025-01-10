// Function to toggle red background color on grid cells
function toggleRedBackground(event) {
    const cell = event.target;

    // Toggle the 'filled' class on the clicked cell
    if (cell.classList.contains("filled")) {
        cell.classList.remove("filled"); // Remove the red color and reveal the number
        cell.textContent = cell.dataset.number; // Restore the original number
    } else {
        cell.classList.add("filled"); // Add the red color and hide the number
        cell.textContent = ""; // Clear the cell's text
    }
}

// Function to handle the "Fill Cleared" button click
function fillCleared() {
    const gridCells = document.querySelectorAll("#numbers .gridCell.filled");
    gridCells.forEach(cell => {
        cell.classList.remove("filled"); // Remove the red color by removing the 'filled' class
        cell.textContent = cell.dataset.number; // Restore the number from the data attribute
    });
}

// Add event listener to the "Fill Cleared" button
document.getElementById("ClearButton").addEventListener("click", fillCleared);

// Function to add event listeners to grid cells
function addClickListenersToGridCells() {
    const gridCells = document.querySelectorAll("#numbers .gridCell"); // Get all grid cells
    gridCells.forEach(cell => {
        // Store the original number in a data attribute
        cell.dataset.number = cell.textContent;
        cell.addEventListener("click", toggleRedBackground); // Add click event listener
    });
}

// Hook into the grid creation process
const originalCreateGrid = createGrid; // Save the reference to the original createGrid function
createGrid = function (cellCount) {
    originalCreateGrid(cellCount); // Call the original createGrid function
    addClickListenersToGridCells(); // Add click listeners after the grid is created
};

// Add event listener to the "Fill Cleared" button
document.getElementById("ClearButton").addEventListener("click", fillCleared);
