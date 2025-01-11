function countAndHighlight(number, gridCells) {
    let count = 0;
    gridCells.forEach(cell => {
        const isMatch = parseInt(cell.textContent) === number;
        cell.classList.toggle("highlight", isMatch);
        if (isMatch) count++;
    });
    return count;
}

function handleNumberClick(event) {
    const clickedNumber = parseInt(event.target.textContent);
    const gridCells = document.querySelectorAll("#numbers .gridCell");
    const occurrences = countAndHighlight(clickedNumber, gridCells);
    document.querySelector("#controls .control:nth-child(2) label").textContent = 
        `${occurrences} copies of the number ${clickedNumber}`;
}

function resetHighlights() {
    document.querySelector("#controls .control:nth-child(2) label").textContent = 
        "Click on a number to find copies";
    document.querySelectorAll("#numbers .gridCell").forEach(cell => 
        cell.classList.remove("highlight")
    );
}

function addGridClickListeners() {
    document.querySelectorAll("#numbers .gridCell").forEach(cell => 
        cell.addEventListener("click", handleNumberClick)
    );
}

const originalCreateGrid = createGrid;
createGrid = function (cellCount) {
    originalCreateGrid(cellCount);
    addGridClickListeners();
};

document.getElementById("resetMarked").addEventListener("click", resetHighlights);
