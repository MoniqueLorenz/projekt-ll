function randomNumber() {
    return Math.ceil(99 * Math.random());
}

function startGrid() {
    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    body.insertBefore(grid, script);
    
    for (let i = 0; i < 95; i++) {
        const cell = document.createElement("div");
        const randomNumbers = randomNumber();
        array.push(randomNumbers);
        grid.appendChild(cell);
        cell.setAttribute("class", "cell");
        cell.textContent = randomNumbers;
    }
}

function resetGrid() {
    let cells = document.querySelectorAll("#grid .cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
}

const body = document.querySelector("body");
const homebutton = document.querySelector(".home-button");
const script = document.querySelector("script");

const a = document.createElement("a");
const numbers = document.createElement("div");
const h2 = document.createElement("h2");
const input = document.createElement("input");
const createButton = document.createElement("button");

let array = [];

a.setAttribute("class", "home-links");
a.setAttribute("href", "../index.html");
a.textContent = "Home";
homebutton.appendChild(a);

numbers.setAttribute("id", "numbers");
body.insertBefore(numbers, script);
numbers.appendChild(h2);
numbers.appendChild(input);
numbers.append(createButton);

h2.textContent = "How many numbers in the grid?";
createButton.textContent = "Create";
input.value = "-";

startGrid();

createButton.addEventListener("click", function () {
    const inputValue = input.value;
    let grid = document.getElementById("grid");
    array = [];

    if (grid) {
        grid.innerHTML = "";
    } else {
        grid = document.createElement("div");
        body.insertBefore(grid, script);
        grid.setAttribute("id", "grid");
    }

    for (let i = 0; i < inputValue; i++) {
        let cell = document.createElement("div");
        let randomNumbers = randomNumber();
        array.push(randomNumbers);
        grid.appendChild(cell);
        cell.setAttribute("class", "cell");
        cell.textContent = randomNumbers;
    }
});
