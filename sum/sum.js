["sumResultAll", "sumResultMarked"].forEach(
    id => (document.getElementById(id).innerText = "-")
);

let markedCells = [];

const markOrUnmarkCellSelection = (cell, cellValue) => {
    cell.classList.toggle("marked");
    if (cell.classList.contains("marked")) {
        markedCells.push(cellValue);
    } else {
        markedCells = markedCells.filter(value => value !== cellValue);
    }
    updateField("sumResultMarked", markedCells.reduce((sum, val) => sum + val, 0));
};

const updateTotalGridSum = () => {
    const totalSum = Array.from(document.querySelectorAll("#numbers .gridCell"))
        .reduce((sum, cell) => sum + parseInt(cell.textContent), 0);
    updateField("sumResultAll", totalSum);
};

const updateField = (id, value) => {
    const element = document.getElementById(id);
    element.innerText = value || "-";
};

document.getElementById("numbers").addEventListener("click", e => {
    if (e.target.classList.contains("gridCell")) {
        markOrUnmarkCellSelection(e.target, parseInt(e.target.textContent));
    }
});

document.getElementById("resetMarked").addEventListener("click", () => {
    document.querySelectorAll(".gridCell.marked").forEach(cell => cell.classList.remove("marked"));
    markedCells = [];
    updateField("sumResultMarked", 0);
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#creator button").addEventListener("click", () =>
        setTimeout(updateTotalGridSum, 0)
    );
});
