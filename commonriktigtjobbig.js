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
