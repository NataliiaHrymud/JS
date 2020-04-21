'use strict';

const enterCountry = 'Введите страну доставки товара!';
const messageCancel = 'Отменено пользователем!';
const noDelivery = 'В вашей стране доставка не доступна';
const emptyEnterCountry = 'Укажите страну доставки товара!';

const China = "Китай";
const Chili = "Чили";
const India = "Индия";
const Jamaica = "Ямайка";
const Australia = "Австралия";

let message = prompt (enterCountry);
let priсe = 0;
let countryName;

if (message === null) {
    message = messageCancel;
  } else if (message === "") {
    message = emptyEnterCountry;
  } else {
    countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();
  
    switch (countryName) {
      case China:
        priсe = 100;
        break;
  
      case Chili:
        priсe = 250;
        break;
  
      case Australia:
        priсe = 170;
        break;
  
      case India:
        priсe = 80;
        break;

      case Jamaica:
        priсe = 120;
        break;

      default:
        message = noDelivery;
    }
  }
  
  if (priсe > 0) {
    message = `Доставка в ${countryName} будет стоить ${priсe} кредитов`;
  }
  alert(message);