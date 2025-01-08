const generateButton = document.getElementById('generate');
const resetMarkedButton = document.getElementById('resetMarked');
const boxCountInput = document.getElementById('boxCount');


// Function to reset marked boxes
function resetMarked() {
    const markedBoxes = document.querySelectorAll('.number-box.marked');
    markedBoxes.forEach(box => {
        box.classList.remove('marked');
        box.style.backgroundColor = ''; // Reset background
        box.textContent = box.dataset.value; // Show the number again
    });
}

// Add event listener for grid clicks
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('number-box')) {
        const box = event.target;

        // Toggle marking
        if (box.classList.contains('marked')) {
            box.classList.remove('marked');
            box.style.backgroundColor = ''; // Reset background
            box.textContent = box.dataset.value; // Show the number again
        } else {
            box.classList.add('marked');
            box.style.backgroundColor = 'red'; // Fill with red
            box.textContent = ''; // Hide the number
        }
    }
});

// Apply hover effect only to marked boxes
document.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('marked')) {
        event.target.style.backgroundColor = 'orange'; // Change to orange on hover
    }
});

document.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('marked')) {
        event.target.style.backgroundColor = 'red'; // Revert back to red
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

// Reset the marked boxes when the reset button is clicked
resetMarkedButton.addEventListener('click', resetMarked);