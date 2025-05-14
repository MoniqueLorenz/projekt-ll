function setupClearCells() {
    let cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {

        cells[i].addEventListener("mouseover", function () {
            if (cells[i].clicked) {
                cells[i].style.backgroundColor = "grey";
            } else {
                cells[i].style.backgroundColor = "black";
            }
        });

        cells[i].addEventListener("mouseout", function () {
            if (cells[i].clicked) {
                cells[i].style.backgroundColor = "white";
            } else {
                cells[i].style.backgroundColor = "";
            }
        });

        cells[i].addEventListener("click", function () {
            if (cells[i].clicked) {
                cells[i].style.backgroundColor = "";
                cells[i].textContent = array[i];
                cells[i].clicked = false;
            } else {
                cells[i].style.backgroundColor = "grey";
                cells[i].textContent = "";
                cells[i].clicked = true;
            }
        });
    }
}

const clearButton = document.createElement("button");

body.insertBefore(clearButton, grid);

clearButton.textContent = "Fill Cleared";
clearButton.setAttribute("class", "wantMargin");

setupClearCells();

clearButton.addEventListener("click", function () {
    const cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
        cells[i].textContent = array[i];
        cells[i].clicked = false;
    }
});

createButton.addEventListener("click", function () {
    setupClearCells();
});
