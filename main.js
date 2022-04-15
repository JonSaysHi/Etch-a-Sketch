const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
  const gridDivs = document.createElement("div");
  gridDivs.id = "gridDivs";
  container.appendChild(gridDivs);
}
