let currentInput = '';
let calculationHistory = '';

function appendToResult(value) {
    currentInput += value;
    updateDisplay();
}

function clearToResult() {
    currentInput = '';
    calculationHistory = '';
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        calculationHistory = currentInput + '=';
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

