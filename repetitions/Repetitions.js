["sumResultAll", "sumResultMarked"].forEach(id => (document.getElementById(id).value = "-"));

const countOccurrences = gridCells =>
    gridCells.reduce((counts, cell) => {
        const num = parseInt(cell.textContent);
        counts[num] = (counts[num] || 0) + 1;
        return counts;
    }, {});

const getMostRepeatedNumbers = counts => {
    const maxCount = Math.max(...Object.values(counts));
    const mostRepeated = Object.keys(counts)
        .filter(num => counts[num] === maxCount)
        .map(Number);
    return { mostRepeated, maxCount };
};

const updateField = (id, value) =>
    (document.getElementById(id).value = value.length ? value.join(", ") : "-");

const highlightNumbers = (gridCells, numbers) =>
    gridCells.forEach(cell => {
        cell.classList.toggle("highlight", numbers.includes(parseInt(cell.textContent)));
    });

// Find missing numbers from 1 to 100
const findMissingNumbers = gridCells => {
    const presentNumbers = new Set(Array.from(gridCells, cell => parseInt(cell.textContent)));
    return Array.from({ length: 99 }, (_, i) => i + 1).filter(num => !presentNumbers.has(num));
};

// Analyze the grid
const analyzeGrid = () => {
    const gridCells = Array.from(document.querySelectorAll("#numbers .gridCell"));
    if (!gridCells.length) return console.warn("No grid cells found.");

    const counts = countOccurrences(gridCells);
    const { mostRepeated, maxCount } = getMostRepeatedNumbers(counts);

    updateField("sumResultAll", mostRepeated.map(num => `${num} (${maxCount} times)`));
    highlightNumbers(gridCells, mostRepeated);

    const missingNumbers = findMissingNumbers(gridCells);
    updateField("sumResultMarked", missingNumbers);
};

// Automatically analyze the grid on changes
new MutationObserver(analyzeGrid).observe(document.getElementById("numbers"), { childList: true });
