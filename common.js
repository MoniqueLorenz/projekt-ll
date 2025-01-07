

const sumResultAll = document.getElementById('sumResultAll');
const numbersContainer = document.getElementById('numbers');



// Function to create the grid with random numbers
function createGrid(count) {
    // Clear the container before creating a new grid
    numbersContainer.innerHTML = '';

    // Set a range for random numbers (e.g., 1 to 100)
    const minValue = 1;
    const maxValue = 100;

    let totalSum = 0; // Variable to store the sum of all numbers

    // Calculate the number of columns for a balanced layout
    const columns = Math.ceil(Math.sqrt(count));
    numbersContainer.style.gridTemplateColumns = `repeat(${columns}, 50px)`;

    // Create the grid boxes with random numbers
    for (let i = 1; i <= count; i++) {
        const box = document.createElement('div');
        box.className = 'number-box';

        // Generate a random number within the specified range
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        box.textContent = randomNumber; // Display the random number in the box

        // Store the random number in a data attribute for later use
        box.dataset.value = randomNumber;

        // Add the random number to the total sum
        totalSum += randomNumber;

        // Append the box to the container
        numbersContainer.appendChild(box);
    }

    // Update the "Sum of all" input field
    sumResultAll.value = totalSum;
}