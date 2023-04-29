let gridSize = 8;
let mode;

function createGrids(){
    let grid = document.querySelector('.container');

    for (i = 0; i < gridSize; i++){
        row = document.createElement("div");
        row.id = "row" + (i+1);
        grid.appendChild(row);

        rowW = document.querySelector('#row' + (i+1));
        console.log(rowW);
        for(j = 0; j < gridSize; j++){
            cell = document.createElement("div");
            cell.classList.add('cell', (j+1));
            rowW.appendChild(cell);
            
        }
    }
}

function drawOnCell(mode, Cell){
    if (mode == 'hover'){
        Cell.addEventListener('mouseover', () => {
            Cell.style.backgroundColor = 'rgb(175, 175, 175)';
        });
    }

    else if (mode == 'click'){
        Cell.addEventListener('mousedown', () => {
            Cell.style.backgroundColor = 'rgb(175, 175, 175)';
        });
    }
}

createGrids();
Cells = document.querySelectorAll(".cell");
Cells.forEach((Cell) => {
    drawOnCell('click', Cell)
});