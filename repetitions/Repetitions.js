const generateButton = document.getElementById('generate');
const boxCountInput = document.getElementById('boxCount');

// Event listener for the "Create" button
generateButton.addEventListener('click', () => {
const count = parseInt(boxCountInput.value, 10);

// Validate the input
if (isNaN(count) || count <= 0) {
    alert('Please enter a valid positive number.');
    return;
}

// Create the grid with random numbers
createGrid(count);

// After creating the grid, analyze the grid for the most repeated numbers and missing numbers
analyzeGrid();
});

// Function to analyze the grid for the most repeated number(s) and missing numbers, and mark them
function analyzeGrid() {
// Retrieve the numbers displayed in the grid
const numbers = [];
document.querySelectorAll('.number-box').forEach(box => {
    numbers.push(parseInt(box.textContent)); // Store the numbers from the grid
});

// Step 1: Calculate the frequency of each number in the grid
const frequency = {};
numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});

// Step 2: Find the maximum frequency (the highest number of repetitions)
const maxFrequency = Math.max(...Object.values(frequency));

// Step 3: Find the number(s) with the highest frequency
const mostRepeatedNumbers = Object.keys(frequency)
    .filter(num => frequency[num] === maxFrequency)
    .map(Number); // Convert keys back to numbers

// Step 4: Display the most repeated number(s) in the input field
sumResultAll.value = mostRepeatedNumbers.join(', ');

// Step 5: Identify missing numbers (let's assume range is from 1 to the maximum number in the grid)
const maxNumberInGrid = Math.max(...numbers);
const missingNumbers = [];
for (let i = 1; i <= maxNumberInGrid; i++) {
    if (!numbers.includes(i)) {
        missingNumbers.push(i);
    }
}

// Step 6: Display the missing numbers in the input field
sumResultMarked.value = missingNumbers.length > 0 ? missingNumbers.join(', ') : '-';

// Step 7: Mark the most repeated number(s) in the grid
document.querySelectorAll('.number-box').forEach(box => {
    const number = parseInt(box.textContent);
    if (mostRepeatedNumbers.includes(number)) {
        box.classList.add('marked');
    } else {
        box.classList.remove('marked'); // Ensure other boxes are unmarked
    }
});
}