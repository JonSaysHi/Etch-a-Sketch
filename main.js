const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");

let gridSize = 64;

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridDivs = document.createElement("div");
    gridDivs.classList.add("gridDivs");
    container.appendChild(gridDivs);
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridDivs.addEventListener("mouseover", () => {
      gridDivs.style.backgroundColor = "black";
    });
  }
}

createGrid();
