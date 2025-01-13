// Clear input fields on page load
document.getElementById("sumResultAll").value = "-";
document.getElementById("sumResultMarked").innerText = "-"; // Use innerText for the <div>

// Analyze the grid
function analyzeGrid() {
    const gridCells = Array.from(document.querySelectorAll("#numbers .gridCell"));
    if (!gridCells.length) return;

    // Count repetitions of each number
    const numberCounts = gridCells.reduce((counts, cell) => {
        const num = parseInt(cell.textContent);
        counts[num] = (counts[num] || 0) + 1;
        return counts;
    }, {});

    // Find the maximum repetition count
    const maxCountRepetition = Math.max(0, ...Object.values(numberCounts));
    const mostRepeated = Object.keys(numberCounts)
        .filter(num => numberCounts[num] === maxCountRepetition)
        .map(Number);

    // Find numbers that are missing from the grid (assuming range 1-100)
    const missingNumbers = Array.from({ length: 100 }, (_, i) => i + 1)
        .filter(num => !gridCells.some(cell => parseInt(cell.textContent) === num));

    // Update the most repeated numbers
    document.getElementById("sumResultAll").value = mostRepeated.length
        ? mostRepeated.map(num => `${num} (Repeated ${maxCountRepetition} times)`).join(", ")
        : "-";

    // Update the missing numbers in the <div>
    document.getElementById("sumResultMarked").innerText = missingNumbers.length
        ? missingNumbers.join(", ")
        : "-";

    // Highlight cells with most repeated numbers
    gridCells.forEach(cell => {
        const num = parseInt(cell.textContent);
        cell.classList.toggle("highlight", mostRepeated.includes(num));
    });
}

// Observe grid changes
new MutationObserver(analyzeGrid).observe(document.getElementById("numbers"), { childList: true });
