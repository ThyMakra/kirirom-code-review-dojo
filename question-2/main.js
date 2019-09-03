"use strict"

//write code in here

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const numberElement = document.getElementById('number')

function buttonClicked(operation){
    if (operation == 'plus') numberElement.textContent = parseInt(numberElement.innerHTML) + 1;
    else if (operation == 'minus') numberElement.textContent = parseInt(numberElement.innerHTML) - 1;
    else if (operation == 'reset') numberElement.textContent = 0;
}

plusButton.addEventListener('click', () => buttonClicked("plus"));
minusButton.addEventListener('click', () => buttonClicked("minus"));
resetButton.addEventListener('click', () => buttonClicked("reset"));