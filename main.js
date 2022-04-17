const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");

let gridSize = 16;

//-- Function creates grid, changing the color of squares from white to black--//

// function createGrid(gridSize) {
//   container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
//   container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
//   for (let i = 0; i < gridSize * gridSize; i++) {
//     const divs = document.createElement("div");
//     container.appendChild(divs);
//     divs.classList.add("gridDivs");
//     divs.addEventListener("mouseover", () => {
//       divs.style.backgroundColor = "black";
//     });
//   }
// }

//-- Function creates grid, changing the color fo squares from white to arand RGB value --//

// function createGrid(gridSize) {
//   container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
//   container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
//   for (let i = 0; i < gridSize * gridSize; i++) {
//     const divs = document.createElement("div");
//     container.appendChild(divs);
//     divs.classList.add("gridDivs");
//     divs.addEventListener("mouseover", () => {
//       let randomColor = "#" + Math.floor(Math.random() * 19777215).toString(16);
//       divs.style.backgroundColor = randomColor;
//     });
//   }
// }

function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const divs = document.createElement("div");
    container.appendChild(divs);
    divs.classList.add("gridDivs");
    divs.addEventListener("mouseover", () => {
      divs.style.backgroundColor = "black";
      divs.style.opacity = (parseFloat(divs.style.opacity) || 0) + 0.2;
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
  let gridSize = prompt("Please enter a grid size between 1-100.", "");
  if (gridSize < 1 || gridSize > 100) {
    alert("ERROR! Grid size must be between 1-100.");
    createGrid(16);
  } else {
    createGrid(gridSize);
  }
}
