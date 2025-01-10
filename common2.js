class GridManager {
    constructor(config) {
        this.numbersContainerId = config.numbersContainerId || 'numbers';
        this.controlsContainerId = config.controlsContainerId || 'controls';
        this.sumResultId = config.sumResultId || 'sumResultAll';
        this.resetButtonId = config.resetButtonId || 'resetMarked';
        this.generateButtonId = config.generateButtonId || 'generate';
        this.minValue = config.minValue || 1;
        this.maxValue = config.maxValue || 100;
        this.onBoxClick = config.onBoxClick || this.defaultBoxClickHandler;
        this.onReset = config.onReset || this.defaultResetHandler;
    }

    createGrid(count) {
        const numbersContainer = document.getElementById(this.numbersContainerId);
        const sumResultAll = document.getElementById(this.sumResultId);

        // Clear the container before creating a new grid
        numbersContainer.innerHTML = '';

        let totalSum = 0;
        const columns = Math.ceil(Math.sqrt(count));
        numbersContainer.style.gridTemplateColumns = `repeat(${columns}, 50px)`;

        // Create grid boxes with random numbers
        for (let i = 1; i <= count; i++) {
            const box = document.createElement('div');
            box.className = 'number-box';

            const randomNumber = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
            box.textContent = randomNumber;
            box.dataset.value = randomNumber;

            totalSum += randomNumber;

            numbersContainer.appendChild(box);
        }

        // Update the "Sum of all" input field
        sumResultAll.value = totalSum;
    }

    initialize() {
        const numbersContainer = document.getElementById(this.numbersContainerId);
        const resetMarkedButton = document.getElementById(this.resetButtonId);

        // Attach event listeners
        numbersContainer.addEventListener('click', (event) => this.onBoxClick(event));
        resetMarkedButton.addEventListener('click', () => this.onReset());

        // Attach listener for grid creation
        document.getElementById(this.generateButtonId).addEventListener('click', () => {
            const count = parseInt(document.getElementById('boxCount').value, 10);
            if (isNaN(count) || count < 1) {
                alert("Please enter a valid number greater than 0.");
            } else {
                this.createGrid(count);
            }
        });
    }

    createControls() {
        const controlsDiv = document.getElementById(this.controlsContainerId);
        const controlDiv = document.createElement('div');
        controlDiv.classList.add('control');

        const label = document.createElement('label');
        label.textContent = 'How many numbers in the grid? ';

        const input = document.createElement('input');
        input.type = 'number';
        input.id = 'boxCount';
        input.min = 1;

        const button = document.createElement('button');
        button.id = this.generateButtonId;
        button.textContent = 'Create';

        label.appendChild(input);
        controlDiv.appendChild(label);
        controlDiv.appendChild(button);
        controlsDiv.insertBefore(controlDiv, controlsDiv.firstChild);
    }

    defaultBoxClickHandler(event) {
        const box = event.target;
        if (box.classList.contains('number-box')) {
            box.classList.toggle('marked'); // Example action: toggle a "marked" class
        }
    }

    defaultResetHandler() {
        const numbersContainer = document.getElementById(this.numbersContainerId);
        const boxes = numbersContainer.querySelectorAll('.number-box.marked');
        boxes.forEach(box => box.classList.remove('marked')); // Remove the "marked" class
    }
}

// Example Usage on a Page
document.addEventListener('DOMContentLoaded', () => {
    const gridManager = new GridManager({
        numbersContainerId: 'numbers',
        controlsContainerId: 'controls',
        sumResultId: 'sumResultAll',
        resetButtonId: 'resetMarked',
        minValue: 1,
        maxValue: 100,
        onBoxClick: (event) => {
            const box = event.target;
            if (box.classList.contains('number-box')) {
                console.log(`Box clicked: ${box.dataset.value}`);
                box.classList.toggle('highlight'); // Custom action for this page
            }
        },
        onReset: () => {
            console.log('Reset button clicked');
            const numbersContainer = document.getElementById('numbers');
            numbersContainer.querySelectorAll('.number-box').forEach(box => {
                box.classList.remove('highlight'); // Custom reset logic for this page
            });
        },
    });

    gridManager.createControls();
    gridManager.initialize();
});
