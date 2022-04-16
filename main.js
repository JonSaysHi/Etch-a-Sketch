const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");

let gridSize = 16;

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridDivs = document.createElement("div");
    gridDivs.classList.add("gridDivs");
    gridDivs.setAttribute("id", "gridDivs");
    container.appendChild(gridDivs);
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridDivs.addEventListener("mouseover", () => {
      gridDivs.classList.add("blackDivs");
      // gridDivs.style.backgroundColor = "black";
    });
  }
}

createGrid(gridSize);

resetButton.addEventListener("click", () => {
  let gridSize = prompt("What grid size would you like? (x * x)", "");
  createGrid(gridSize);
  let allGridDivs = document.querySelectorAll("#gridDivs");
  allGridDivs.style.backgroundColor = "white";
});
