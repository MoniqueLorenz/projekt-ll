document.addEventListener("DOMContentLoaded", () => {
    const numbersContainer = document.getElementById("numbers");
    const sumResultAll = document.getElementById("sumResultAll");
    const sumResultMarked = document.getElementById("sumResultMarked");
    const resetButton = document.getElementById("reset");
    const creatorDiv = document.getElementById("creator");
  
    // Create input and button for grid creation
    const input = document.createElement("input");
    input.type = "number";
    input.id = "gridSize";
    input.placeholder = "How many numbers in the grid?";
    
    const createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.id = "createButton";
  
    creatorDiv.appendChild(input);
    creatorDiv.appendChild(createButton);
  
    let allNumbers = [];
    let markedSum = 0;
  
    // Function to create grid
    const createGrid = () => {
      const gridSize = parseInt(input.value);
      if (isNaN(gridSize) || gridSize <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
      }
  
      // Reset previous grid and values
      numbersContainer.innerHTML = "";
      allNumbers = [];
      markedSum = 0;
      sumResultMarked.textContent = "-";
  
      // Generate random numbers and sum
      let totalSum = 0;
      for (let i = 0; i < gridSize; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1; // Numbers between 1 and 100
        allNumbers.push(randomNum);
        totalSum += randomNum;
  
        // Create number element
        const numberElement = document.createElement("div");
        numberElement.textContent = randomNum;
        numberElement.className = "number";
        numberElement.addEventListener("click", () => toggleNumber(numberElement, randomNum));
        numbersContainer.appendChild(numberElement);
      }
  
      sumResultAll.textContent = totalSum;
    };
  
    // Function to toggle a number's selection
    const toggleNumber = (element, value) => {
      if (element.classList.contains("marked")) {
        element.classList.remove("marked");
        markedSum -= value;
      } else {
        element.classList.add("marked");
        markedSum += value;
      }
      sumResultMarked.textContent = markedSum;
    };
  
    // Reset functionality
    resetButton.addEventListener("click", () => {
      const markedElements = document.querySelectorAll(".number.marked");
      markedElements.forEach(el => el.classList.remove("marked"));
      markedSum = 0;
      sumResultMarked.textContent = "-";
    });
  
    // Add event listener for creating the grid
    createButton.addEventListener("click", createGrid);
  });
  
