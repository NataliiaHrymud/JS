'use strict';
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handleNameOutput);

function handleNameOutput(event) {
    if (nameOutput.textContent === '' || event.currentTarget.value === ''){
        nameOutput.textContent = 'незнакомец';
    }  else {
        nameOutput.textContent = event.currentTarget.value;
    } 
};
