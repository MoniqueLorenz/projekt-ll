const link = document.getElementById("myLink");
link.href = "../index.html"; 
link.textContent = "Home";
link.style.display = "flex";
link.style.justifyContent = "center";
link.style.marginBottom = "20px";
link.style.textDecoration = "none";

document.addEventListener("DOMContentLoaded", function () {
    const controlDiv = document.getElementById("creator");

    const label = document.createElement("label");
    label.textContent = "How many numbers in grid: ";
    controlDiv.appendChild(label);

    const input = document.createElement("input");
    input.type = "number";
    input.style.width = "50px";
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
        const randomNum = Math.floor(Math.random() * 99) + 0;
        const cell = document.createElement("div");
        cell.classList.add("gridCell");
        cell.textContent = randomNum;
        gridWrapper.appendChild(cell);
    }
}






