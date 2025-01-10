// Function to find and highlight the first two numbers in the grid that add up to the target sum
function findAndHighlightPairs(targetSum) {
    const gridCells = document.querySelectorAll(".gridCell");
    const numbers = Array.from(gridCells).map(cell => parseInt(cell.textContent));
    const cellMap = new Map();
    let found = false;

    // Reset all highlights
    gridCells.forEach(cell => cell.classList.remove("highlight"));

    // Find the first pair that adds up to the target sum
    for (let i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i];

        if (cellMap.has(complement)) {
            // Highlight the two matching cells
            gridCells[i].classList.add("highlight");
            gridCells[cellMap.get(complement)].classList.add("highlight");
            found = true;
            break; // Stop after finding the first valid pair
        }

        cellMap.set(numbers[i], i); // Store the number and its index
    }

    if (!found) {
        alert("No two cells add up to the target sum.");
    }
}

// Event listener for the "Find Two Cells that Add Up" button
document.getElementById("resetMarked").addEventListener("click", function () {
    const targetSum = parseInt(document.getElementById("sumResultAll").value);

    if (isNaN(targetSum)) {
        alert("Please enter a valid number.");
        return;
    }

    findAndHighlightPairs(targetSum);
});


