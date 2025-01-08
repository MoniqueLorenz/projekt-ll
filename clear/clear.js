
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
});