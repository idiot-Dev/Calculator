let firstNum;
let secondNum;
let operator;
function Add(x, y){
    return x + y ;
}
function Subtract(x, y){
    return x - y ;
}
function Multiply(x, y){
    return x * y ;
}
function Divide(x, y){
    if (y === 0) return "Error!!";
    return x / y ;
}

function operate(operator, num1, num2){
    switch(operator){
        case "+": Add(num1,num2);
            break;
        case "-": Subtract(num1,num2);
            break;
        case "×": Multiply(num1,num2);
            break;
        case "÷": Divide(num1,num2);
            break;
    }
}

