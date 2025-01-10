// Function to toggle the 'marked' class on a clicked box
function toggleMarkedClass(box) {
    box.classList.toggle('marked');
}

// Function to calculate the sum of all marked boxes
function calculateMarkedSum() {
    const markedBoxes = document.querySelectorAll('.number-box.marked');
    return Array.from(markedBoxes)
        .reduce((sum, box) => sum + parseInt(box.dataset.value), 0);
}

// Function to update the "Sum of marked" input field
function updateMarkedSumDisplay(markedSum) {
    const sumResultMarked = document.getElementById('sumResultMarked');
    sumResultMarked.value = markedSum;
}

// Function to handle the marking of boxes and updating the sum
function handleBoxClick(event) {
    const box = event.target;

    if (box.classList.contains('number-box')) {
        // Toggle the 'marked' class on the clicked box
        toggleMarkedClass(box);

        // Calculate the new sum of all marked boxes
        const markedSum = calculateMarkedSum();

        // Update the "Sum of marked" field
        updateMarkedSumDisplay(markedSum);
    }
}

// Function to reset the marked boxes and the "Sum of marked" field
function resetMarkedBoxes() {
    const markedBoxes = document.querySelectorAll('.number-box.marked');
    markedBoxes.forEach(function (box) {
        box.classList.remove('marked');
    });

    // Reset the "Sum of marked" input field
    const sumResultMarked = document.getElementById('sumResultMarked');
    sumResultMarked.value = '-';
}

// Function to create grid with random numbers
function createGrid(count) {
    const numbersContainer = document.getElementById('numbers');
    const sumResultAll = document.getElementById('sumResultAll');

    // Clear the container before creating a new grid
    numbersContainer.innerHTML = '';

    const minValue = 1;
    const maxValue = 100;
    let totalSum = 0;

    // Calculate the number of columns for a balanced layout
    const columns = Math.ceil(Math.sqrt(count));
    numbersContainer.style.gridTemplateColumns = `repeat(${columns}, 50px)`;

    // Create grid boxes with random numbers
    for (let i = 1; i <= count; i++) {
        const box = document.createElement('div');
        box.className = 'number-box';

        // Generate a random number within the range
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        box.textContent = randomNumber;

        // Store the random number in the data-value attribute
        box.dataset.value = randomNumber;

        // Add the random number to the total sum
        totalSum += randomNumber;

        // Append the box to the container
        numbersContainer.appendChild(box);
    }

    // Update the "Sum of all" input field
    sumResultAll.value = totalSum;
}

// Function to initialize the event listeners and setup after DOMContentLoaded
function initialize() {
    const numbersContainer = document.getElementById('numbers');
    const resetMarkedButton = document.getElementById('resetMarked');

    // Event listener for the numbers container (after the grid is created)
    numbersContainer.addEventListener('click', handleBoxClick);

    // Event listener for the "Reset" button to reset marked boxes
    resetMarkedButton.addEventListener('click', resetMarkedBoxes);

    // Event listener for the "Create" button to generate the grid
    document.getElementById('generate').addEventListener('click', function () {
        const count = parseInt(document.getElementById('boxCount').value, 10);
        if (isNaN(count) || count < 1) {
            alert("Please enter a valid number greater than 0.");
        } else {
            createGrid(count);
        }
    });
}

// Function to dynamically create controls
function createControls() {
    const controlsDiv = document.getElementById('controls');
    const controlDiv = document.createElement('div');
    controlDiv.classList.add('control');

    const label = document.createElement('label');
    label.textContent = 'How many numbers in the grid? ';

    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'boxCount';
    input.min = 1;

    const button = document.createElement('button');
    button.id = 'generate';
    button.textContent = 'Create';

    label.appendChild(input);
    controlDiv.appendChild(label);
    controlDiv.appendChild(button);
    controlsDiv.insertBefore(controlDiv, controlsDiv.firstChild);  // Add at the top
}

// DOMContentLoaded event listener to ensure the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize everything after the DOM is loaded
    createControls();
    initialize();
});
