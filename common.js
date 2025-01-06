const generateButton = document.getElementById('generate');
const boxCountInput = document.getElementById('boxCount');
const numbersDiv = document.getElementById('numbers');

// Reusable grid creation function
function createGrid(container, numbersList) {
    container.innerHTML = ''; // Clear any existing grid
    numbersList.forEach(number => {
        const box = document.createElement('div');
        box.classList.add('number-box');
        box.textContent = number;
        box.dataset.value = number;
        box.addEventListener('click', toggleMarked); // Add click event listener
        container.appendChild(box);
    });
}