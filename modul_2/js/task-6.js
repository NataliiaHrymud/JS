'use strict';

let input = '';
let numbers = [];
let total = 0;

do {
    input = prompt('Введите любое число', '');
    if (input === '' || isNaN(input)) {
        alert ('Было введено не число, попробуйте еще раз!');
    } else numbers.push(Number(input));
 } while (input !== null);


for (let i=0; i < numbers.length; i++) {
    total += numbers[i];
}
    console.log (`Общая сумма чисел равна ${total}`);