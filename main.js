const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");

let gridSize = 16;

function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const divs = document.createElement("div");
    container.appendChild(divs);
    divs.classList.add("gridDivs");
    divs.addEventListener("mouseover", () => {
      divs.style.backgroundColor = "pink";
    });
  }
}

createGrid(gridSize);

resetButton.addEventListener("click", () => {
  clearGrid();
  sizeOfGrid();
});

function clearGrid() {
  document.querySelectorAll(".gridDivs").forEach((e) => e.remove());
}

function sizeOfGrid() {
  let gridSize = prompt("Please enter a grid size between 1-100 (x * x)", "");
  if (gridSize < 1 || gridSize > 100) {
    alert("ERROR! Grid size must be between 1-100.");
    createGrid(16);
  } else {
    createGrid(gridSize);
  }
}
