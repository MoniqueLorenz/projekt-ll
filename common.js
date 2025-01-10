const link = document.getElementById("myLink");
link.href = "../index.html"; // Ensure the path is correct
link.textContent = "Go to Home";

document.addEventListener("DOMContentLoaded", function () {
    const controlDiv = document.getElementById("creator");

    const label = document.createElement("label");
    label.textContent = "How many numbers in grid: ";
    controlDiv.appendChild(label);

    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    controlDiv.appendChild(input);

    const button = document.createElement("button");
    button.textContent = "Create";
    controlDiv.appendChild(button);

    button.addEventListener("click", function () {
        const numberOfCells = parseInt(input.value);
        if (isNaN(numberOfCells) || numberOfCells <= 0) {
            alert("Please enter a valid number greater than 0.");
            return;
        }
        createGrid(numberOfCells);
    });
});

function createGrid(cellCount) {
    const gridWrapper = document.getElementById("numbers");
    gridWrapper.innerHTML = '';


    for (let i = 0; i < cellCount; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        const cell = document.createElement("div");
        cell.classList.add("gridCell");
        cell.textContent = randomNum;
        gridWrapper.appendChild(cell);
    }
}






