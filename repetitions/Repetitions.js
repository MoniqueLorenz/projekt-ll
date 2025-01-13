document.getElementById("sumResultAll").value = "-";
document.getElementById("sumResultMarked").innerText = "-"; // Use innerText for the <div>

function analyzeGrid() {
    const gridCells = Array.from(document.querySelectorAll("#numbers .gridCell"));
    if (!gridCells.length) return;

    const numberCounts = gridCells.reduce((counts, cell) => {
        const num = parseInt(cell.textContent);
        counts[num] = (counts[num] || 0) + 1;
        return counts;
    }, {});

    const maxCountRepetition = Math.max(0, ...Object.values(numberCounts));
    const mostRepeated = Object.keys(numberCounts)
        .filter(num => numberCounts[num] === maxCountRepetition)
        .map(Number);

    const missingNumbers = Array.from({ length: 100 }, (_, i) => i + 1)
        .filter(num => !gridCells.some(cell => parseInt(cell.textContent) === num));

    document.getElementById("sumResultAll").innerText = mostRepeated.length
        ? mostRepeated.map(num => `${num} (Repeated ${maxCountRepetition} times)`).join(", ")
        : "-";

    document.getElementById("sumResultMarked").innerText = missingNumbers.length
        ? missingNumbers.join(", ")
        : "-";

    gridCells.forEach(cell => {
        const num = parseInt(cell.textContent);
        cell.classList.toggle("highlight", mostRepeated.includes(num));
    });
}

new MutationObserver(analyzeGrid).observe(document.getElementById("numbers"), { childList: true });
