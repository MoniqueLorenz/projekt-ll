const boxCountInput = document.getElementById('boxCount');
const generateButton = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');
const sumResultMarked = document.getElementById('sumResultMarked');
const resetMarkedButton = document.getElementById('resetMarked');


function toggleMarked(event) {
    const box = event.target;

    // Toggle the 'marked' class on the clicked box
    box.classList.toggle('marked');

    // Get all marked boxes
    const markedBoxes = document.querySelectorAll('.number-box.marked');

    // Calculate the sum of all marked boxes
    const markedSum = Array.from(markedBoxes)
        .reduce((sum, box) => sum + parseInt(box.dataset.value), 0);

    // Display the marked sum in the input field
    sumResultMarked.value = markedSum;
}

// Add event listener to each number box after the grid is created
numbersDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('number-box')) {
        toggleMarked(event);
    }
});


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
});

function resetMarkedSum() {
    const markedBoxes = document.querySelectorAll('.number-box.marked');
    markedBoxes.forEach(box => box.classList.remove('marked')); // Remove the 'marked' class
    sumResultMarked.value = '-'; // Reset the sum of marked boxes
}
resetMarkedButton.addEventListener('click', resetMarkedSum);
