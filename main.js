const container = document.querySelector("#container");
// const sizeButton = document.querySelector("#size-button");
const ResetButton = document.querySelector("#reset-button");
const blackButton = document.querySelector("#black-button");
const pencilButton = document.querySelector("#pencil-button");
const rainbowButton = document.querySelector("#rainbow-button");
const eraserButton = document.querySelector("#eraser-button");

let gridSize = 16;

let black_color = function () {
  this.style.backgroundColor = "black";
};

let rainbow_color = function () {
  let rainbowColor = "#" + Math.floor(Math.random() * 19777215).toString(16);
  this.style.backgroundColor = rainbowColor;
};

let pencil_color = function () {
  this.style.backgroundColor = "black";
  this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.2;
};

let eraser_color = function () {
  this.style.backgroundColor = "white";
};

let currentSelection = black_color;

//-- Function creates grid, changing the color of squares from white to black--//

function createGrid(gridSize) {
  let currentSelection = black_color;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const divs = document.createElement("div");
    divs.classList.add("gridDivs");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.appendChild(divs);

    //mouseover event listener
    divs.addEventListener("mouseover", currentSelection);
  }
}

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

//-- Function creates grid, changes the color to increasing opacity --//

// function createGrid(gridSize) {
//   container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
//   container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
//   for (let i = 0; i < gridSize * gridSize; i++) {
//     const divs = document.createElement("div");
//     container.appendChild(divs);
//     divs.classList.add("gridDivs");
//     divs.addEventListener("mouseover", () => {
//       divs.style.backgroundColor = "black";
//       divs.style.opacity = (parseFloat(divs.style.opacity) || 0) + 0.2;
//     });
//   }
// }

createGrid(gridSize);

ResetButton.addEventListener("click", () => {
  clear();
  resize();
});

function resize() {
  let gridSize = prompt("Please enter a grid size between 1-100.", "");
  if (gridSize < 1 || gridSize > 100) {
    alert("ERROR! Grid size must be between 1-100.");
    createGrid(16);
  } else {
    createGrid(gridSize);
  }
}

function clear() {
  document.querySelectorAll(".gridDivs").forEach((e) => e.remove());
  createGrid(gridSize);
}

blackButton.addEventListener("click", () => {
  console.log("test");
  let myDivs = document.querySelectorAll(".gridDivs");
  for (let i = 0; i < myDivs.length; i++) {
    // myDivs[i].removeEventListener("mouseover", currentSelection);
    myDivs[i].addEventListener("mouseover", black_color);
  }
  currentSelection = black_color;
});

rainbowButton.addEventListener("click", () => {
  console.log("test");
  myDivs = document.querySelectorAll(".gridDivs");
  for (let i = 0; i < myDivs.length; i++) {
    myDivs[i].removeEventListener("mouseover", currentSelection);
    myDivs[i].addEventListener("mouseover", rainbow_color);
  }
  currentSelection = rainbow_color;
});

pencilButton.addEventListener("click", () => {
  console.log("test");
  let myDivs = document.querySelectorAll(".gridDivs");
  for (let i = 0; i < myDivs.length; i++) {
    myDivs[i].removeEventListener("mouseover", currentSelection);
    myDivs[i].addEventListener("mouseover", pencil_color);
  }
  currentSelection = pencil_color;
});

eraserButton.addEventListener("click", () => {
  console.log("test");
  let myDivs = document.querySelectorAll(".gridDivs");
  for (let i = 0; i < myDivs.length; i++) {
    myDivs[i].removeEventListener("mouseover", currentSelection);
    myDivs[i].addEventListener("mouseover", eraser_color);
  }
  currentSelection = eraser_color;
});
