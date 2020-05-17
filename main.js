function createGrid(GridRows, GridColumns) {

    let gridContainer = document.getElementById("gridContainer");

    for (let i = 1; i<=GridRows; i++) {
        const divRow = document.createElement("div");
        divRow.setAttribute("id", "row");
        //divRow.classList.add("row");
    
        for (let j = 1; j<=GridColumns; j++) {
            const divCol = document.createElement("div");
            //divCol.textContent = `r${i}, c${j}`;
            //divCol.classList.add("column");
            divCol.classList.remove("mouseover");
            divCol.classList.add("empty");
            divRow.appendChild(divCol);

        }
    gridContainer.appendChild(divRow);
    }
    return;
};

const clickButton = document.getElementById("resetButton").addEventListener("click", runResetFunction);

function runResetFunction() {
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = " ";
    let newWidth = document.getElementById("boxwidth").value;
    if (newWidth == 0) {
        newWidth = 20;
    }
    //Uncomment this to make a non-square grid.
    //change createGrid(newHeight, newWidth);
    //const newHeight = document.getElementById("boxheight").value;
    createGrid(newWidth, newWidth);
    runSwitchColor();    
}


let switchColor = document.querySelectorAll(".empty");

function runSwitchColor() {
    switchColor = document.querySelectorAll(".empty");
    console.log(switchColor.length);
    console.log(switchColor);
    
    let inputType = document.getElementById("mouse").checked;
    if (inputType) {
        inputType = "mouseover";
    } else {
        inputType = "click";
    }    
    
    for (let i = 0; i<switchColor.length; i++) {
        
        //if (inputType == "mouseover") {
       //     switchColor[i].removeEventListener("click", ());
       // } else {
       //     switchColor[i].removeEventListener("mouseover", ());
       // };
        
       //All of these here comments were to try to get the 
       //classChanger function below to work.  I still don't quite
       // understand how to convert from arrow notation to a literal 
       // function.  Maybe I'll come back to this project when I do.
       // Note, above, with the "if" statement - I need to remove the event listener
       // of whatever input type I'm not using.  removeEventListener only
       // works with literal functions, not anonymous ones.
       // Anyway.  classChanger() does not currently fucntion as it should.
       // instead it changes all the classes to mouseover.
        
        //console.log(switchColor[i]);
        //switchColor[i].addEventListener("click", classChanger(i, switchColor));
        
        switchColor[i].addEventListener(inputType, () => {
            switchColor[i].classList.remove("empty");
            switchColor[i].classList.add("mouseover");
        });
    };
};

function classChanger(i, switchColor) {
    console.log(switchColor[i]);
    switchColor[i].classList.remove("empty");
    switchColor[i].classList.add("mouseover");
    return switchColor[i].classList;
};


createGrid(20, 20); 
runSwitchColor();

const radioListener = document.getElementsByName("inputType");

for (let i = 0; i<radioListener.length; i++) {
    radioListener[i].addEventListener("click", () => {
        runSwitchColor();
    });
};




//ToDo right here, figure out how to mouse over and change class of anything mousedover.  I think you need to select all and use a loop
// but I don't quite remember why.  Check TOP DOM manipulation for ideas and details.  I pretty much know what I want, I just need
//JS to understand what I wants

     
    
