let currentValue = 0;
let operator = null;
let previousValue = 0;

function addNumber(number) {
    if (currentValue === 0) {
        currentValue = number;
    } else {
        currentValue += number;
    }
    updateDisplay();
}

function operation(op) {
    if (operator === null) {
        operator = op;
        previousValue = currentValue;
        currentValue = 0;
    }
    else {
        previousValue = currentValue;
        currentValue = 0;
        operator = op;
    }
    updateDisplay();
}

function equals() {
    if (operator !== null){
        previousValue = calculate()
        operator = null;
        currentValue = previousValue;
    }
    updateDisplay();
}

function calculate() {
    const x = parseFloat(previousValue);
    const y = parseFloat(currentValue);
    switch (operator) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
    }
}

function clearScreen() {
    currentValue = 0;
    previousValue = 0;
    operator = null;
    updateDisplay();
}

function updateDisplay() {
   document.getElementById('result').innerText = currentValue;
}