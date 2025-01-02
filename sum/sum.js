document.addEventListener('DOMContentLoaded', () => {
    // Skapa gemensamma kontroller
    createCommonControls();

    const numbersDiv = document.getElementById('numbers');
    const sumResultAll = document.getElementById('sumResultAll');
    const sumResultMarked = document.getElementById('sumResultMarked');
    const resetButton = document.getElementById('reset');
    const createButton = document.getElementById('createButton');
    const numberInput = document.getElementById('numberInput');

    // Lägg till nummer i grid
    createButton.addEventListener('click', () => {
        const value = parseInt(numberInput.value);
        if (isNaN(value)) return;

        const numberElement = document.createElement('div');
        numberElement.textContent = value;
        numberElement.classList.add('number', 'padded');
        numberElement.addEventListener('click', () => {
            numberElement.classList.toggle('marked');
            updateSums();
        });
        numbersDiv.appendChild(numberElement);

        updateSums();
        numberInput.value = ''; // Rensa input
    });

    // Uppdatera summor
    function updateSums() {
        const allNumbers = [...numbersDiv.children].map(div => parseInt(div.textContent));
        const markedNumbers = [...numbersDiv.children]
            .filter(div => div.classList.contains('marked'))
            .map(div => parseInt(div.textContent));

        sumResultAll.textContent = allNumbers.reduce((a, b) => a + b, 0);
        sumResultMarked.textContent = markedNumbers.reduce((a, b) => a + b, 0);
    }

    // Återställ knappen
    resetButton.addEventListener('click', () => {
        numbersDiv.innerHTML = '';
        updateSums();
    });
});
