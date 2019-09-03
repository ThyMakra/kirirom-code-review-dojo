"use strict"

const numberValue = document.getElementById('number');
const inputField = document.getElementById('numberInput');

document.getElementById('plus').addEventListener('click', () => buttonClicked('plus'));
document.getElementById('minus').addEventListener('click', () => buttonClicked('minus'));
document.getElementById('reset').addEventListener('click', () => buttonClicked('reset'));

function buttonClicked(operate){
    var input = parseInt(inputField.value);
    var number = parseInt(numberValue.textContent);
    if ( isNaN(input) || isNaN(number)){
        alert('Invalid error!');
    }
    else{
        if (operate == 'plus') numberValue.textContent = number + input;
        else if (operate == 'minus') numberValue.textContent = number - input;
        else if (operate == 'reset') numberValue.textContent = 0;        
    }    
    inputField.value = '';
}