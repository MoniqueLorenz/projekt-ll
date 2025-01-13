function findAndHighlightPairs(targetSum) {
    const gridCells = document.querySelectorAll(".gridCell");
    const numbers = Array.from(gridCells).map(cell => parseInt(cell.textContent));
    const cellMap = new Map();
    let found = false;


    gridCells.forEach(cell => cell.classList.remove("highlight"));

    for (let i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i];

        if (cellMap.has(complement)) {
            gridCells[i].classList.add("highlight");
            gridCells[cellMap.get(complement)].classList.add("highlight");
            found = true;
            break; 
        }

        cellMap.set(numbers[i], i); 
    }

    if (!found) {
        alert("No two cells add up to the target sum.");
    }
}

document.getElementById("resetMarked").addEventListener("click", function () {
    const targetSum = parseInt(document.getElementById("sumResultAll").value);

    if (isNaN(targetSum)) {
        alert("Please enter a valid number.");
        return;
    }

    findAndHighlightPairs(targetSum);
});


