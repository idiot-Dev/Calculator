const screen = document.querySelector(".screen");
const buttons  = document.querySelectorAll("button");

function Add(x, y) {
    return x + y ;
}

function Subtract(x, y) {
    return x - y ;
}

function Multiply(x, y) {
    return x * y ;
}

function Divide(x, y) {
    if (y === 0) return "Error!!";
    return x / y ;
}

function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operator){
        case "+": return Add(num1,num2);
        case "-": return Subtract(num1,num2);
        case "×": return Multiply(num1,num2);
        case "÷": return Divide(num1,num2);
        default: return "Error!!";
    }
}

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldResetScreen = false;

function clearResult() {
    screen.value = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    shouldResetScreen = false;
}

function handleOperator(operator) {
    if (currentOperator !== "") {
        calculateResult();
    }
    firstNumber = screen.value;
    currentOperator = operator;
    shouldResetScreen = true;
}

function calculateResult() {
    if (currentOperator === "" || shouldResetScreen) return;
    if (screen.value === "") return;
    
    secondNumber = screen.value;
    screen.value = operate(currentOperator, firstNumber, secondNumber);
    currentOperator = "";
    shouldResetScreen = true;
}

function appendValue(buttonValue) {
    if (shouldResetScreen) {
        screen.value = "";
        shouldResetScreen = false;
    }
    screen.value += buttonValue;
}

function deleteValue() {
    screen.value = screen.value.slice(0, -1);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        const buttonValue = buttons[i].textContent;
        if (buttonValue === "Clear") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else if (buttonValue === "⌫") {
            deleteValue();
        } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "×" || buttonValue === "÷") {
            handleOperator(buttonValue);
        } else {
            appendValue(buttonValue);
        }
    });
}

