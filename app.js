function clear() {
    document.querySelector('.calcul-container').innerText = '';
}
function erase() {
    let display = document.querySelector('.calcul-container').innerText;
    document.querySelector('.calcul-container').innerText = display.slice(0, -1);
}
function handleOperator(operator) {
    let display = document.querySelector('.calcul-container').innerText;
    if (display.length === 0) return; 
    let lastChar = display[display.length - 1];
    if (lastChar === '+' || lastChar === '-' || lastChar === '×' || lastChar === '÷') {
        document.querySelector('.calcul-container').innerText = display.slice(0, -1) + operator;
    } else {
        document.querySelector('.calcul-container').innerText += operator;
    }
}

function appendNumber(number) {
    document.querySelector('.calcul-container').innerText += number;
}

function handleParentheses(parentheses) {
    document.querySelector('.calcul-container').innerText += parentheses;
}

function calculate() {
    let display = document.querySelector('.calcul-container').innerText
    let result;
    try {
        result = eval(display);
        document.querySelector('.calcul-container').innerText = result
    } catch (error) {
        document.querySelector('.calcul-container').innerText = 'Error'
    }
}
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('eraser').addEventListener('click', erase)
document.getElementById('divide').addEventListener('click', () => handleOperator('÷'))
document.getElementById('multipli').addEventListener('click', () => handleOperator('×'))
document.getElementById('negative').addEventListener('click', () => handleOperator('-'))
document.getElementById('add').addEventListener('click', () => handleOperator('+'))
document.getElementById('point').addEventListener('click', () => handleOperator('.'))
document.getElementById('equal').addEventListener('click', calculate);

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent))
})
document.querySelectorAll('.parentheses').forEach(button => {
    button.addEventListener('click', () => handleParentheses(button.textContent))
})