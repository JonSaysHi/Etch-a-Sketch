const container = document.querySelector("#container");
for (let i = 0; i < 4096; i++) {
  const gridDivs = document.createElement("div");
  gridDivs.id = "gridDivs";
  container.appendChild(gridDivs);

  gridDivs.addEventListener("mouseover", () => {
    gridDivs.style.backgroundColor = "black";
  });
}
