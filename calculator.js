let currentInput = '';
let previousInput = '';
let operator = '';

function appendCharacter(char) {
    currentInput += char;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    previousInput = currentInput;
    currentInput = eval(currentInput);
    document.getElementById('display').value = currentInput;
    operator = '';
}

