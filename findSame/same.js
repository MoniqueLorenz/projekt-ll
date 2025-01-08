const resetMarkedButton = document.getElementById('resetMarked');
const generateButton = document.getElementById('generate');
const boxCountInput = document.getElementById('boxCount');
const copies = document.getElementById('copies');

let selectedNumber = null; // Stores the selected number

// Function to handle the box click (highlight identical numbers)
function handleBoxClick(number) {
    if (selectedNumber === number) {
        resetMarked(); // If the same number is clicked again, reset
        return;
    }

    selectedNumber = number;
    const allBoxes = document.querySelectorAll('.number-box');
    const matchingBoxes = [];

    // Reset the previously marked boxes
    allBoxes.forEach(box => box.classList.remove('marked'));

    // Find all boxes with the same number and highlight them
    allBoxes.forEach(box => {
        if (parseInt(box.dataset.value) === number) {
            box.classList.add('marked');
            matchingBoxes.push(box);
        }
    });

    // Update the text to show how many copies of the number
    copies.textContent = `${matchingBoxes.length} copies of the number ${number}`;
}

// Function to reset marked boxes
function resetMarked() {
    const markedBoxes = document.querySelectorAll('.number-box.marked');
    markedBoxes.forEach(box => box.classList.remove('marked'));

    selectedNumber = null;
    copies.textContent = 'Click on a number to find copies'; // Reset message
}

// Event listener for the "Create" button
generateButton.addEventListener('click', () => {
    const count = parseInt(boxCountInput.value, 10);

    if (isNaN(count) || count <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    createGrid(count);

    // Add event listeners to the new grid cells after creating the grid
    const allBoxes = document.querySelectorAll('.number-box');
    allBoxes.forEach(box => {
        const number = parseInt(box.dataset.value);
        box.addEventListener('click', () => handleBoxClick(number));
    });
});

// Reset the marked boxes when the reset button is clicked
resetMarkedButton.addEventListener('click', resetMarked);