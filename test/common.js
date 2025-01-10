// common.js

// Setup for creating grid and handling logic
function setupCreator() {
    const creator = document.getElementById("creator");
  
    // Skapa inputfältet
    const input = document.createElement("input");
    input.type = "number";
    input.id = "numberInput";
    input.placeholder = "Enter number of grid cells";
  
    // Skapa knappen
    const createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.id = "createGrid";
  
    // Lägg till input och knapp i creator-diven
    creator.appendChild(document.createTextNode("How many numbers in the grid? "));
    creator.appendChild(input);
    creator.appendChild(createButton);
  
    // Lägg till event listener för att skapa griden
    createButton.addEventListener("click", createGrid);
  }
  
  // Funktion för att skapa grid med slumpmässiga siffror
  function createGrid() {
    const numbersDiv = document.getElementById("numbers");
    const input = document.getElementById("numberInput");
    const count = parseInt(input.value, 10);
  
    // Kontrollera om input är giltigt
    if (isNaN(count) || count <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }
  
    // Rensa tidigare grid
    numbersDiv.innerHTML = "";
  
    // Skapa en ny grid
    const numbers = [];
    for (let i = 0; i < count; i++) {
      const number = Math.floor(Math.random() * 100); // Slumpmässigt nummer mellan 0-99
      numbers.push(number);
  
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      gridItem.textContent = number;
      numbersDiv.appendChild(gridItem);
    }
  
    // Uppdatera resultat
    updateResults(numbers);
  }
  
  // Funktion för att uppdatera "Most repeated" och "Not in place"
  function updateResults(numbers) {
    // Räkna antal upprepningar
    const counts = {};
    numbers.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
    });
  
    // Hitta det mest upprepade numret
    const maxCount = Math.max(...Object.values(counts));
    const mostRepeated = Object.entries(counts)
      .filter(([_, count]) => count === maxCount)
      .map(([num]) => num);
  
    // Hitta siffror som inte förekommer
    const allNumbers = Array.from({ length: 100 }, (_, i) => i);
    const notInPlace = allNumbers.filter(num => !numbers.includes(num));
  
    // Uppdatera UI
    document.getElementById("mostRepeated").value =
      mostRepeated.length > 0
        ? `${mostRepeated.join(", ")} (Repeated ${maxCount} times)`
        : "None";
  
    document.getElementById("notInPlace").value = notInPlace.join(", ");
  }
  
  // Setup när sidan laddas
  document.addEventListener("DOMContentLoaded", () => {
    setupCreator();
  });
  