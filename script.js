let result = document.getElementById("display");
let currentInput = '';

function handleButtonClick(value) {
  console.log("Button clicked: ", value);
  if (value === '=') {
    calculate();
  } else if (value === 'clr') {
    clearDisplay();
  } else if (value === 'del') {
    deleteLastCharacter();
  } else {
    currentInput += value;
    result.value = currentInput;
  }
}

function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  result.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    result.value = currentInput;
  } catch (error) {
    result.value = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  result.value = '';
}
