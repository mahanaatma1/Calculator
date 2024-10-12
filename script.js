let calculation = '';
let isLightMode = true;

function toggleTheme() {
    isLightMode = !isLightMode;
    if (isLightMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.getElementById('theme-mode').textContent = 'Light Mode';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.getElementById('theme-mode').textContent = 'Dark Mode';
    }
}

function input(value) {
    if (calculation === 'Error') calculation = '';
    calculation += value;
    document.getElementById('calculation').textContent = calculation;
}

function percent() {
    const currentNumber = parseFloat(calculation); // Get the current number
    if (!isNaN(currentNumber)) {
        const percentageValue = currentNumber / 100; // Convert it to a percentage
        calculation = percentageValue.toString() + " * "; // Append `*` for further calculations
        document.getElementById('calculation').textContent = calculation;
    }
}


function clearDisplay() {
    calculation = '';
    document.getElementById('calculation').textContent = '';
    document.getElementById('result').textContent = '0';
}


/*
function deleteLast() {
    if (calculation.length > 0) {
        calculation = calculation.slice(0, -1);
        document.getElementById('calculation').textContent = calculation || '0';
    }
}
*/

function calculate() {
    try {
        const result = eval(calculation);
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        calculation = result.toString();
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
    }
}

function square() {
    const currentNumber = parseFloat(calculation);
    const result = currentNumber * currentNumber;
    document.getElementById('result').textContent = result;
    calculation = result.toString();
    document.getElementById('calculation').textContent = currentNumber + '² =';
}

function sqrt() {
    const currentNumber = parseFloat(calculation);
    const result = Math.sqrt(currentNumber);
    document.getElementById('result').textContent = result;
    calculation = result.toString();
    document.getElementById('calculation').textContent = '√' + currentNumber + ' =';
}