'use strict';

let input;
const userNumber = prompt("Введите желаемое число", "");
let total = 0;

input = parseInt(userNumber);
total = parseInt(total);

if (isNaN(input)) {
  alert("Это не число");
}

do {
    input = Number(input);
    total = Number(total);
    total = (total + input);
    input = prompt('Введите число ещё раз или нажмите "Отмена"', "");
    if (isNaN(input)) {
      alert (`${input}  является не числом`);
      break;
    }
  } while (input !== null);
  
alert(`Общая сумма чисел равна ${total}`);
