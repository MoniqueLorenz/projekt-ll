// Clear input fields on page load
document.getElementById("sumResultAll").value = "-";
document.getElementById("sumResultMarked").value = "-";


let markedCells = [];

// Function to toggle selection of grid cells
function toggleCellSelection(cell, cellValue) {
    if (cell.classList.contains("marked")) {
        cell.classList.remove("marked");
        markedCells = markedCells.filter(value => value !== cellValue);
    } else {
        cell.classList.add("marked");
        markedCells.push(cellValue);
    }
    updateMarkedSum();
}

// Function to calculate the sum of marked cells
function updateMarkedSum() {
    const markedSum = markedCells.reduce((accum, current) => accum + current, 0);
    document.getElementById("sumResultMarked").value = markedSum;
}

// Function to calculate the total sum of all grid cells
function updateTotalGridSum() {
    const gridCells = document.querySelectorAll("#numbers .gridCell");
    let totalSum = 0;

    gridCells.forEach(cell => {
        totalSum += parseInt(cell.textContent);
    });

    document.getElementById("sumResultAll").value = totalSum;
}

// Add event listeners to handle cell selection
document.getElementById("numbers").addEventListener("click", function (e) {
    if (e.target.classList.contains("gridCell")) {
        const cell = e.target;
        const cellValue = parseInt(cell.textContent);
        toggleCellSelection(cell, cellValue);
    }
});

// Add event listener to reset marked cells
document.getElementById("resetMarked").addEventListener("click", function () {
    document.querySelectorAll(".gridCell.marked").forEach(cell => cell.classList.remove("marked"));
    markedCells = [];
    updateMarkedSum();
});

// Hook into the grid creation process (ensure sum updates correctly after grid creation)
document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.querySelector("#creator button");
    createButton.addEventListener("click", function () {
        // Delay sum updates to ensure grid is fully created
        setTimeout(updateTotalGridSum, 0);
    });
});
