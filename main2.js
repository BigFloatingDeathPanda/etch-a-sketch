function createGrid(GridRows, GridColumns) {
    let gridContainer = document.getElementById("gridContainer");

    for (let i = 1; i<=GridRows; i++) {
        const divRow = document.createElement("div");
        divRow.setAttribute("id", "row");
    
        for (let j = 1; j<=GridColumns; j++) {
            const divCol = document.createElement("div");
            divCol.classList.remove("mouseover");
            divCol.classList.add("empty");
            divRow.appendChild(divCol);
        }
    gridContainer.appendChild(divRow);
    }
    return;
};

const pushResetButton = document.getElementById("resetButton").addEventListener("click", runResetFunction);

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
    for (let i = 0; i < switchColor.length; i++) {
        switchColor[i].style.backgroundColor = `rgba(255, 255, 255, 1)`;
        let colorPicker = document.getElementsByName("colorType");  //Selects radio color, passes it to background color below
        switchColor[i].addEventListener("mouseover", () => {
            switchColor[i].classList.remove("empty");
            switchColor[i].classList.add("mouseover");
            switchColor[i].style.cssText = `background-color: ${colorDecisionFunction(colorPicker, i)}`;                
        });
    }   
}

function RANDOM(lower, upper) {
    return Math.floor(Math.random()*(upper - lower) + lower);//.toString(16).toUpperCase();
};

let hueAdd = 0;
let lightRemove = 17;

function colorDecisionFunction (colorPicker, i) {
    if (colorPicker[0].checked == true) { //Black
        return `black`;
    } else if (colorPicker[1].checked == true) { //Rainbow
        return `hsl(${RANDOM(0, 361)}, ${RANDOM(90, 100)}%, ${RANDOM(40, 60)}%)`;
    } else if (colorPicker[2].checked == true) { //Blueish
            return `hsl(${RANDOM(195, 206)}, ${RANDOM(90, 101)}%, ${RANDOM(15, 96)}%)`;
    } else if (colorPicker[3].checked == true) { //Orangish
        return `hsl(${RANDOM(19, 32)}, ${RANDOM(96, 101)}%, ${RANDOM(48, 53)}%)`;
    } else if (colorPicker[4].checked == true) { //Pinkish
        return `hsl(${RANDOM(300, 340)}, ${RANDOM(60, 100)}%, ${RANDOM(80, 100)}%)`;
    } else if (colorPicker[5].checked == true) { //Grayscale
        return `hsl(${RANDOM(0, 360)}, 0%, ${RANDOM(0, 100)}%)`;
    } else if (colorPicker[6].checked == true) { //Yellow
        return `hsl(${RANDOM(47, 65)}, 100%, ${RANDOM(48, 52)}%)`;
    } else if (colorPicker[7].checked == true) { //Green
        return `hsl(${RANDOM(85, 141)}, ${RANDOM(32, 101)}%, ${RANDOM(24, 67)}%)`;
    } else if (colorPicker[8].checked == true) { //Red
        return `hsl(${RANDOM(-2, 15)}, ${RANDOM(95, 101)}%, ${RANDOM(24, 53)}%)`;
    } else if (colorPicker[9].checked == true) { //Warm
        return `hsl(${RANDOM(0, 50)}, ${RANDOM(95, 101)}%, 50%)`;
    } else if (colorPicker[10].checked == true) { //Cold
        return `hsl(${RANDOM(155, 295)}, ${RANDOM(95, 101)}%, ${RANDOM(45, 76)}%)`;
    } else if (colorPicker[11].checked == true) { //Pastel
        return `hsl(${RANDOM(0, 361)}, 100%, ${RANDOM(85, 90)}%)`;
    } else if (colorPicker[12].checked == true) { //White-Eraser
        return `hsl(0, 0%, 100}%)`;
    } else if (colorPicker[13].checked == true) { //Bright Rainbow
        hueAdd += 1;
        return `hsl(${hueAdd}, 100%, 60%)`;
    } else if (colorPicker[14].checked == true) { //Dark Rainbow
        hueAdd += 1;
        return `hsl(${hueAdd}, 100%, 30%)`;
    } else if (colorPicker[15].checked == true) { //Fall
        return `hsl(${RANDOM(10, 46)}, ${RANDOM(95, 101)}%, ${RANDOM(21, 67)}%)`;
    } else if (colorPicker[16].checked == true) { //Winter
        return `hsl(${RANDOM(180, 220)}, ${RANDOM(98, 101)}%, ${RANDOM(65, 96)}%)`;
    } else if (colorPicker[17].checked == true) { //Spring
        return `hsl(${RANDOM(47, 141)}, ${RANDOM(98, 101)}%, ${RANDOM(50, 92)}%)`;
    
    } else if (colorPicker[18].checked == true) { //Lighten
        
        let currentShade = switchColor[i].style.backgroundColor.replace(`rgb(`, ``).replace(`)`, ``).split(", ");

        if (currentShade == "white") {
            return `white`;
        }

        if (currentShade == "black") {
            return(`rgba(${lightRemove}, ${lightRemove}, ${lightRemove}, 1)`);
        }

        console.log(`BORK ${currentShade}`);
               
        let currentShadeR = currentShade[0];
        console.log(`R: ${currentShadeR}`);

        if (currentShadeR == "") {
            currentShadeR = 255;
        }
        currentShadeR = (Number(currentShadeR) + lightRemove);
        
        if (currentShadeR >= 255) {
            currentShadeR = 255;
        }
        
        
        let currentShadeG = currentShade[1];
        console.log(`G: ${currentShadeG}`);

        if (currentShadeG == undefined) {
            currentShadeG = 255;
        } 
        currentShadeG = (Number(currentShadeG) + lightRemove);
        
        if (currentShadeG >= 255) {
            currentShadeG = 255;
        }

        let currentShadeB = currentShade[2];
        console.log(`B: ${currentShadeB}`);

        if (currentShadeB == undefined) {
            currentShadeB = 255;
        }
        currentShadeB = (Number(currentShadeB) + lightRemove);
        
        if (currentShadeB >= 255) {
            currentShadeB = 255;
        }

        return `rgba(${currentShadeR}, ${currentShadeG}, ${currentShadeB}, 1)`;
    } else if (colorPicker[19].checked == true) { //Darken

        //Yeah this line right here, man.  What a mess.  Good luck following that one, future self!
        let currentShade = switchColor[i].style.backgroundColor.replace(`rgb(`, ``).replace(`)`, ``).split(", ");

        if (currentShade == "black") {
            return `black`;
        }

        console.log(`BORK ${currentShade}`);
               
        let currentShadeR = currentShade[0];
        
        if (currentShadeR == "") {
            currentShadeR = 255;
        }
        currentShadeR = (Number(currentShadeR) - lightRemove);
        
        if (currentShadeR <= 0) {
            currentShadeR = 0;
        }
        
        
        let currentShadeG = currentShade[1];
        if (currentShadeG == undefined) {
            currentShadeG = 255;
        } 
        currentShadeG = (Number(currentShadeG) - lightRemove);
        
        if (currentShadeG <= 0) {
            currentShadeG = 0;
        }

        let currentShadeB = currentShade[2];
        if (currentShadeB == undefined) {
            currentShadeB = 255;
        }
        currentShadeB = (Number(currentShadeB) - lightRemove);
        
        if (currentShadeB <= 0) {
            currentShadeB = 0;
        }

        return `rgba(${currentShadeR}, ${currentShadeG}, ${currentShadeB}, 1)`;
    }
};

//This function was designed to get rid of arrow notation.  Its not working.
function classChanger(i, switchColor) {
    //console.log(switchColor[i]);
    switchColor[i].classList.remove("empty");
    switchColor[i].classList.add("mouseover");
    return switchColor;
};

let switchColor = document.querySelectorAll(".empty");
runResetFunction(switchColor);
