
let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "Grid-container");
document.body.appendChild(gridContainer);

function grid(squares){
    gridContainer.style.background = "pink";
    gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    for (let columns = 0; columns < squares; columns++){
        let column = document.createElement("div");
        gridContainer.appendChild(column);
    }
    rowSquares = squares * squares - squares
    for (let rows = 0 ; rows < rowSquares; rows++){
        let row = document.createElement("div");
        gridContainer.appendChild(row);
    }
    
}

grid(4);
















