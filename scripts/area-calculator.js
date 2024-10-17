function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);
    console.log(base);

    const heightField = document.getElementById('triangle-height');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaspan = document.getElementById('triangle-area');
    areaspan.innerText = area;
}


function calculateRectangleArea(){
    // get rectangle with
    const widthFild = document.getElementById('rectangle-width');
    const widthValueText = widthFild.value;
    const width = parseFloat(widthValueText);
    console.log(width);


    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const area = width * length;
    
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);


    const height = getInputValue('parallelogram-height');
    console.log(height);

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea(){
    const firstRadius = getInputValue('ellipse-first-redius');
    const secondRedius = getInputValue('ellipse-second-radius');
    const area = 3.14 * firstRadius * secondRedius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
}

// reusable get input value field in number 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span , p , div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}