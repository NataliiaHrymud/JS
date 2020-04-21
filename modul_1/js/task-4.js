'use strict';

let credits = 23580;
let pricePerDroid = 3000;
const numberOfDroids = prompt ('Введите, какое количество дронов Вы хотите купить', '');
let totalPrice = pricePerDroid * numberOfDroids;
const messageCancel = 'Отменено пользователем!';
const lackOfCredits = 'Недостаточно средств на счету!';
let creditsBallance = credits - totalPrice;

if (numberOfDroids === null) {
    alert (messageCancel);
}   else if (numberOfDroids === '') {
    alert ('Необходимо указать желаемое количество дронов');
}   else if (numberOfDroids === '0') {
    alert ('Минимальный заказ 1шт');
}   else if (totalPrice > credits) {
    alert (lackOfCredits);
}   else if (totalPrice <= credits) {
    alert (`Вы купили ${numberOfDroids} дроидов, на счету осталось ${creditsBallance} кредитов.`);
}
    
