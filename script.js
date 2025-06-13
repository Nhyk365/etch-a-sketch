const gridContainer = document.getElementById("container");
let userGrid = 16;
let gridScale;

function colorChange(e) {
  let randomColor =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  e.target.style.setProperty("background-color", randomColor);
  /* .setStyle ("opacity", 0.1) need to find a way to sum 0.1 to opacity every mouse over
  then substitute consol log function with the new one*/
  e.target.addEventListener("mouseover", () => console.log(e));
}

// set the base grid at 16x16 squares and add event listener to each one
// set gridScale to maintain correct ratio with different grid sizes
function looper() {
  for (let i = 0; i < userGrid ** 2; i++) {
    //creates a number of divs selected from the user
    const square = document.createElement("div");
    square.setAttribute("id", `square${i}`);
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", colorChange, { once: true });
    gridScale = 100 / userGrid;
    square.style.setProperty("flex", `1 0 ${gridScale}%`);
    gridContainer.appendChild(square);
  }
}
looper();

/* when button is clicked user is asked for grid dimension */
const gridButton = document.getElementById("size-button");

function setGridSize(e) {
  userGrid = prompt("Choose your grid size (max 100):", 16);
  if (userGrid == null) return;
  if (userGrid > 100 || userGrid < 1) {
    return alert("Size must be between 1 and 100!");
  } else document.querySelectorAll(".square").forEach((e) => e.remove());
  looper();
}
gridButton.addEventListener("click", setGridSize);
