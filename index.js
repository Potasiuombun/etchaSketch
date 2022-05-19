// Initializing variables
const gridSize = 600;
let grid_cell_nr = 99;
let cellSize = gridSize/grid_cell_nr;
let grid = [];
let gridRows = new Array(grid_cell_nr);



//getting HTML elements
const gridContainer = document.getElementsByClassName("grid");
const gridCells = Array.from(document.getElementsByClassName('button'));
const sizeButton = gridCells[0]
// Event handlers

//Function calls
createGrid()
sizeButton.addEventListener('click',changeCellnr);

// Functions

// This will make the grid, otherwise the divs will be set in line
function createGridRows(){
    for(let i = 0; i < gridRows.length; i++){
        gridRows[i] = document.createElement('div');
        gridRows[i].style.height = cellSize+'px';
        gridRows[i].style.width = gridSize+'px';
        gridContainer[0].appendChild(gridRows[i]).className ="gridRows";
        gridRows[i].addEventListener('mouseover', function (e){
            event.target.style.backgroundColor ="black";
        });
    }
}

// this creates the actual grid
function createGridCols(){
    for(let i = 0; i < gridRows.length;i++){
        grid[i] = document.createElement('div');
        grid[i].style.height = cellSize+'px';
        grid[i].style.width = cellSize+'px';
        gridRows[i].style.height= cellSize+'px';
        gridRows[i].style.width = gridSize+'px';
        gridRows[i].appendChild(grid[i]).className ="row";
        for (let j = 0; j < gridRows.length-1; j++){
            grid[i][j] = document.createElement('div');
            gridRows[i].appendChild(grid[i][j]).className="column";
            grid[i][j].style.height= cellSize+'px';
            grid[i][j].style.width = cellSize+'px';
            grid[i][j].addEventListener('mouseover', function (e){
                event.target.style.backgroundColor ="black";
            });
        }
    }
}

function removeGridRows()
{
    for(let i = 0; i < gridRows.length; i++){
        gridRows[i].remove();
    }
}
function removeGridCols()
{
    for(let i = 0; i < gridRows.length;i++){
        for (let j = 0; j < gridRows.length-1; j++){
            grid[i][j].remove();
        }
        grid[i].remove()
    }
}
function createGrid(){
    createGridRows()
    createGridCols()
}

function removeGrid(){
    removeGridCols()
    removeGridRows()
}

function changeCellnr(){
    let mynumber;
    mynumber = prompt("Please enter a number between 1 and 100", "eg: 69");
    mynumber = parseInt(mynumber)
    console.log(mynumber)
    if(mynumber <= 0 || mynumber >= 100 || isNaN(mynumber)){
        alert("please input a number within 1-100")
    }
    else{
        removeGrid()
        grid_cell_nr = mynumber;
        cellSize = gridSize/grid_cell_nr;
        grid = [];
        gridRows = new Array(grid_cell_nr);
        createGrid()
    }       
}

