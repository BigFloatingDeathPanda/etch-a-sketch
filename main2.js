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
    switchColor = document.querySelectorAll(".empty");
    runSwitchColor(switchColor);    
}

function RANDOM(lower, upper) {
    return Math.floor(Math.random()*(upper - lower) + lower);//.toString(16).toUpperCase();
};




function runSwitchColor(switchColor) {
    //let switchColor = document.querySelectorAll(".empty");
    
    let inputType = document.getElementById("mouse").checked;
    if (inputType) {
        inputType = "mouseover";
    } else {
        inputType = "click";
    }    

    let colorPicker = document.getElementsByName("colorType");

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
            switchColor[i].style.cssText = `background-color: ${colorDecisionFunction(colorPicker)}`;

        });
    };
};

function colorDecisionFunction (colorPicker) {
    if (colorPicker[0].checked == true) {
        return `black`;
    } else if (colorPicker[1].checked == true) {
        return `hsl(${RANDOM(0, 361)}, ${RANDOM(90, 100)}%, ${RANDOM(40, 60)}%)`;
    } else if (colorPicker[2].checked == true) {
        return `hsl(${RANDOM(180, 240)}, ${RANDOM(90, 100)}%, ${RANDOM(25, 76)}%)`;
    } else if (colorPicker[3].checked == true) {
        return `hsl(${RANDOM(25, 39)}, ${RANDOM(95, 100)}%, ${RANDOM(45, 55)}%)`;
    } else if (colorPicker[4].checked == true) {
        return `hsl(${RANDOM(300, 340)}, ${RANDOM(60, 100)}%, ${RANDOM(80, 100)}%)`;
    } else if (colorPicker[5].checked == true) {
        return `hsl(${RANDOM(0, 360)}, 0%, ${RANDOM(0, 100)}%)`;
    } else if (colorPicker[6].checked == true) {
        return `hsl(${RANDOM(47, 65)}, 100%, ${RANDOM(48, 52)}%)`;
    } else if (colorPicker[7].checked == true) {
        return `hsl(${RANDOM(85, 141)}, ${RANDOM(32, 101)}%, ${RANDOM(24, 67)}%)`;
    } else if (colorPicker[8].checked == true) {
        return `hsl(${RANDOM(0, 19)}, ${RANDOM(95, 101)}%, ${RANDOM(45, 56)}%)`;
    } else if (colorPicker[9].checked == true) {
        return `hsl(${RANDOM(0, 50)}, ${RANDOM(95, 101)}%, 50%)`;
    } else if (colorPicker[10].checked == true) {
        return `hsl(${RANDOM(140, 310)}, ${RANDOM(95, 101)}%, ${RANDOM(45, 56)}%)`;
    } else if (colorPicker[11].checked == true) {
        return `hsl(${RANDOM(0, 361)}, 100%, ${RANDOM(85, 90)}%)`;
    } else if (colorPicker[12].checked == true) {
        return `hsl(0, 0%, 100}%)`;
    }
};



function classChanger(i, switchColor) {
    console.log(switchColor[i]);
    switchColor[i].classList.remove("empty");
    switchColor[i].classList.add("mouseover");
    return switchColor[i].classList;
};


createGrid(20, 20); 
let switchColor = document.querySelectorAll(".empty");
runSwitchColor(switchColor);

const inputListener = document.getElementsByName("inputType");
for (let i = 0; i<inputListener.length - 1; i++) {
    inputListener[i].addEventListener("click", () => {
        runSwitchColor(switchColor);
    });
};

const colorListener = document.getElementsByName("colorType");
for (let i = 0; i<colorListener.length - 1; i++) {
    colorListener[i].addEventListener("click", () => {
        runSwitchColor(switchColor);
    });
};



//ToDo right here, figure out how to mouse over and change class of anything mousedover.  I think you need to select all and use a loop
// but I don't quite remember why.  Check TOP DOM manipulation for ideas and details.  I pretty much know what I want, I just need
//JS to understand what I wants

     
    
