const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const gridDivs = document.createElement("div");
    gridDivs.id = "gridDivs";
    gridDivs.classList.add("gridDivs");
    container.appendChild(gridDivs);

    gridDivs.addEventListener("mouseover", () => {
      gridDivs.style.backgroundColor = "black";
    });
  }
}

createGrid();
