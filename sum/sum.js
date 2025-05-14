let sum = 0;

function sumOfAll() {
    let sumTotal = 0;
    for (let i = 0; i < array.length; i++) {
        sumTotal += array[i];
    }
    sumAllBox.textContent = sumTotal;
}

function markCellSum() {
    let cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            if (cells[i].style.backgroundColor === "pink") {
                cells[i].style.backgroundColor = "";
                sum -= parseInt(cells[i].textContent);
            } else {
                cells[i].style.backgroundColor = "pink";
                sum += parseInt(cells[i].textContent);
            }

            if (sum === 0) {
                sumMarkedBox.textContent = " - ";
            } else {
                sumMarkedBox.textContent = sum;
            }
        });
    }
}

const sumContainerTop = document.createElement("div");
const sumContainerBottom = document.createElement("div");

const h2All = document.createElement("h2");
const sumAllBox = document.createElement("div");
const h2Marked = document.createElement("h2");
const sumMarkedBox = document.createElement("div");
const resetButton = document.createElement("button");

body.insertBefore(sumContainerTop, grid);
body.insertBefore(sumContainerBottom, grid);

sumContainerTop.appendChild(h2All);
sumContainerTop.appendChild(sumAllBox);

sumContainerBottom.appendChild(h2Marked);
sumContainerBottom.appendChild(sumMarkedBox);
sumContainerBottom.appendChild(resetButton);

sumContainerTop.setAttribute("class", "sum-container");
sumContainerBottom.setAttribute("class", "sum-container");
sumAllBox.setAttribute("class", "boxes");
sumMarkedBox.setAttribute("class", "boxes");

h2All.textContent = "Sum of all numbers";
h2Marked.textContent = "Sum of marked";
resetButton.textContent = "Reset";
sumAllBox.textContent = " - ";
sumMarkedBox.textContent = " - ";

sumOfAll();
markCellSum();

createButton.addEventListener("click", function () {
    sumOfAll();
    markCellSum();
    sumMarkedBox.textContent = " - ";
    sum = 0;
});

resetButton.addEventListener("click", function () {
    resetGrid();
    sumMarkedBox.textContent = " - ";
    sum = 0;
});
