let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "Grid-container");
document.body.appendChild(gridContainer);
let button = document.createElement("button");
button.innerText = "Click Me";
document.body.insertBefore(button, gridContainer);
button.addEventListener("click", showGrids);
grid(10);

function randomColor(){
    return color = Math.floor(Math.random() * 255) + 1;
}
function grid(squares){
    gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    for (let columns = 0; columns < squares; columns++){
        let column = document.createElement("div");
        column.addEventListener("mouseover", () => {column.style.backgroundColor = "rgb(" + randomColor()+ "," + randomColor() + "," + randomColor() + ")"});
        gridContainer.appendChild(column);

    }
    rowSquares = squares * squares - squares
    for (let rows = 0 ; rows < rowSquares; rows++){
        let row = document.createElement("div");
        row.addEventListener("mouseover", () => {row.style.backgroundColor = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"});
        gridContainer.appendChild(row);
    }
    
}

function showGrids(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
      };
    let inputGrid = parseInt(prompt("Enter grid number (1-100):"));
    if (inputGrid < 1 || inputGrid > 100) {
        alert("Not good, must enter again");
        inputGrid = parseInt(prompt("Enter grid number (1-100):"));
    }
    grid(inputGrid);
}












