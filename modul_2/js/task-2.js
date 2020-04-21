'use strict';

function calculateEngravingPrice(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
  }

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10,)); // 80

console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 20)); // 20

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100