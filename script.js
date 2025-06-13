const gridContainer = document.getElementById("container");
let userHeight = 16;
let userWidth = 16;

// set the base grid at 16x16 squares
// verify line 14-15 probably not needed, use square. to add attributes before append
function looper() {
  for (let i = 0; i < userHeight * userWidth; i++) {
    //creates a number of divs selected from the user
    const square = document.createElement("div");
    square.setAttribute("id", `square${i}`);
    square.setAttribute("class", "square");
    gridContainer.appendChild(square);
    const gridElements = document.querySelectorAll(".square");
    Array.from(gridElements).forEach((element) => {
      element.addEventListener("mouseover", colorChange);
    });
  }
}
looper();

function colorChange(e) {
  e.target.style.setProperty("background-color", "black");
}

/* adds an event listener to every grid div */

/* when button is clicked user is asked for grid dimension */
const gridButton = document.getElementById("size-button");

function setGridSize(e) {
  userHeight = prompt("Choose the number of horizontal cells", 16);
  userWidth = prompt("Choose the number of horizontal cells", 16);
  document.querySelectorAll(".square").forEach((e) => e.remove());
  looper();
}
gridButton.addEventListener("click", setGridSize);
