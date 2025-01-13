function toggleRedBackground(event) {
    const cell = event.target;

    if (cell.classList.contains("filled")) {
        cell.classList.remove("filled"); 
        cell.textContent = cell.dataset.number; 
    } else {
        cell.classList.add("filled"); 
        cell.textContent = ""; 
    }
}

function fillCleared() {
    const gridCells = document.querySelectorAll("#numbers .gridCell.filled");
    gridCells.forEach(cell => {
        cell.classList.remove("filled"); 
        cell.textContent = cell.dataset.number; 
    });
}

document.getElementById("ClearButton").addEventListener("click", fillCleared);

function addClickListenersToGridCells() {
    const gridCells = document.querySelectorAll("#numbers .gridCell"); 
    gridCells.forEach(cell => {

        cell.dataset.number = cell.textContent;
        cell.addEventListener("click", toggleRedBackground); 
    });
}

const originalCreateGrid = createGrid;
createGrid = function (cellCount) {
    originalCreateGrid(cellCount); 
    addClickListenersToGridCells(); 
};

document.getElementById("ClearButton").addEventListener("click", fillCleared);
