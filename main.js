/*
//Need, i loops for columns, j loop for rows

thinking, need append child option for each

so, make a column, loop through rows in the column.  To test, assign letters to each "a,b,c, etc"

each row/column needs an ID or CLASS or something.  Column i row j or something.

Start with creating the grid itself.  Then, move on to hover features later.

*/





function createGrid(GridRows, GridColumns) {

    let gridContainer = document.getElementById("gridContainer");

    for (let i = 1; i<=GridRows; i++) {
        const divRow = document.createElement("div");
        divRow.setAttribute("id", "row");
        //divRow.classList.add("row");
    
        for (let j = 1; j<=GridColumns; j++) {
            const divCol = document.createElement("div");
            divCol.textContent = `row${i}, column${j}`;
            //divCol.classList.add("column");
            divCol.classList.add("empty");
            divRow.appendChild(divCol);

        }
    gridContainer.appendChild(divRow);
    }
};

const clickButton = document.getElementById("resetButton");
clickButton.addEventListener("click", runResetFunction);

function runResetFunction() {
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = " ";
    const newSize = getNewGame();
    // this doesn't work. I mean, it sets the width, but now how you want it to... gridContainer.setAttribute("width", `${10*newSize}px`);
    createGrid(newSize, newSize);
}

function getNewGame() {
    return prompt(`What Size per Edge?`);
}

const switchColor = document.getElementsByClassName("empty");
//ToDo right here, figure out how to mouse over and change class of anything mousedover.  I think you need to select all and use a loop
// but I don't quite remember why.  Check TOP DOM manipulation for ideas and details.  I pretty much know what I want, I just need
//JS to understand what I wants







createGrid(16, 16);        
    
