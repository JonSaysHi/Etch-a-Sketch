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

const gridDivs = container.querySelectorAll(".gridDivs");

createGrid(gridSize);

resetButton.addEventListener("click", () => {
  sizeOfGrid();
});

function sizeOfGrid() {
  let gridSize = prompt("What grid size would you like? (x * x)", "");
  createGrid(gridSize);
}
