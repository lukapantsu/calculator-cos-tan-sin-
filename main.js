function addToDisplay(x) {
    document.getElementById("display").value += x;
}
function clearDisplay() {
    clearInput("display");
}
function clearAll() {
    // display displayResult
    clearDisplay();
    clearInput("displayResult");
}
function clearInput(id) {
    document.getElementById(id).value = "";
}

function leftDelete() {
    let str = document.getElementById("display").value;
    let result = str.substring(0, str.length - 1);

    document.getElementById("display").value = result;
}

function calculate() {
    let str = document.getElementById("display").value;
    let result = eval(str);

    document.getElementById("displayResult").value = result;
}

function calculateSin() {
    let str = document.getElementById("display").value;
    let result = Math.sin(str);
    document.getElementById("displayResult").value = result;
}
function calculateTan() {
    let str = document.getElementById("display").value;
    let result = Math.tan(str);
    document.getElementById("displayResult").value = result;
}
function calculateCos() {
    let str = document.getElementById("display").value;
    let result = Math.cos(str);
    document.getElementById("displayResult").value = result;
}

function calculateSqrt() {
    let str = document.getElementById("display").value;
    let result = Math.sqrt(str);
    document.getElementById("displayResult").value = result;
}

//factorial ver gavakete