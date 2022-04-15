const container = document.querySelector("#container");
for (let i = 0; i < 4096; i++) {
  const gridDivs = document.createElement("div");
  gridDivs.id = "gridDivs";
  gridDivs.style.outline = "1px solid black";
  gridDivs.style.height = "10px";
  gridDivs.style.width = "10px";
  container.appendChild(gridDivs);

  gridDivs.addEventListener("mouseover", () => {
    gridDivs.style.backgroundColor = "black";
  });
}
