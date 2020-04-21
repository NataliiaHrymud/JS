'use strict';

/*  Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта (значение свойства name). 
Возвращает общую стоимость продукта (цена * количество).  */

const calculateTotalPrice = function(arr, productName) {
    
    // let totalPrice;
    // for (let i = 0; i < arr.length; ++i) {
    //     if(arr[i].name === productName) {
    //        totalPrice = arr[i].price * arr[i].quantity;
    //     }
    // }
    // return totalPrice;
    let totalPrice = 0;
    for (let i = 0; i < arr.length; ++i) {
        if(arr[i].name === productName) {
           totalPrice += arr[i].price * arr[i].quantity;
/* тоже сработало, хотямне непонятно, почему сработало присваивание со сложением, если мы умножаем значения, а не складываем?
   */
        }
    }
    return totalPrice;
}

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800