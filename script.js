let gridSize = 8;

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

createGrids();
