// Funktion: Räknar och markerar förekomster av ett nummer i grid
function countAndHighlight(number, gridCells) {
    let count = 0;
    gridCells.forEach(cell => {
        const isMatch = parseInt(cell.textContent) === number;
        cell.classList.toggle("highlight", isMatch);
        if (isMatch) count++;
    });
    return count;
}

// Funktion: Hanterar klick på nummer
function handleNumberClick(event) {
    const clickedNumber = parseInt(event.target.textContent);
    const gridCells = document.querySelectorAll("#numbers .gridCell");
    const occurrences = countAndHighlight(clickedNumber, gridCells);
    document.querySelector("#controls .control:nth-child(2) label").textContent = 
        `${occurrences} copies of the number ${clickedNumber}`;
}

// Funktion: Återställer markerade celler och etiketten
function resetHighlights() {
    document.querySelector("#controls .control:nth-child(2) label").textContent = 
        "Click on a number to find copies";
    document.querySelectorAll("#numbers .gridCell").forEach(cell => 
        cell.classList.remove("highlight")
    );
}

// Lägger till klick-händelser på gridens celler
function addGridClickListeners() {
    document.querySelectorAll("#numbers .gridCell").forEach(cell => 
        cell.addEventListener("click", handleNumberClick)
    );
}

// Modifierar createGrid för att lägga till klick-händelser
const originalCreateGrid = createGrid;
createGrid = function (cellCount) {
    originalCreateGrid(cellCount);
    addGridClickListeners();
};

// Lägger till klick-händelse för återställningsknappen
document.getElementById("resetMarked").addEventListener("click", resetHighlights);
