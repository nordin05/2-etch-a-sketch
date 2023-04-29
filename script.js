let gridSize = 640; 
let gridRows = 8;
let cellWidth = gridSize / gridRows;
let hoverModeChecked = false;

function createGrids(){
    let grid = document.querySelector('.container');

    if (grid.hasChildNodes()) {
        grid.replaceChildren();
    }

    for (i = 0; i < gridRows; i++){
        row = document.createElement("div");
        row.id = "row" + (i+1);
        grid.appendChild(row);

        rowW = document.querySelector('#row' + (i+1));
        for(j = 0; j < gridRows; j++){
            cell = document.createElement("div");
            cell.classList.add('cell', (j+1));
            cell.style.width = (cellWidth + 'px');
            cell.style.height = (cellWidth + 'px');
            rowW.appendChild(cell);
            
        }
    }
    updateAllCells()
}

function drawOnCell(mode, Cell){
    if (hoverModeChecked == true){
        Cell.addEventListener('mouseover', () => {
            Cell.style.backgroundColor = 'rgb(175, 175, 175)';
        });
    }

    else if (hoverModeChecked == false){
        Cell.addEventListener('mousedown', () => {
            Cell.style.backgroundColor = 'rgb(175, 175, 175)';
        });
    }
}

function updateAllCells(){
    Cells = document.querySelectorAll(".cell");
    Cells.forEach((Cell) => { drawOnCell(hoverModeChecked, Cell) });
}

createGrids();

let slider = document.querySelector('#myRange');
let sliderText = document.querySelector(".slider-container p");
let hoverSwitch = document.querySelector("#hoverCheckbox");

hoverSwitch.addEventListener("change", function(){
    hoverModeChecked = hoverModeChecked ? false : true;
    updateAllCells();
    })

slider.oninput = function() {
    sliderText.textContent = `Grid resolution: ${this.value}x${this.value}`;

    gridRows = this.value;
    cellWidth = gridSize / gridRows;
    createGrids();
    setTimeout(function() { 
    }, 1000);
}