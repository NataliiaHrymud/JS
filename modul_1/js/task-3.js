'use strict';

let message;
const ENTER_PASSWORD = 'Введите пароль';
const ADMIN_PASSWORD = 'jqueryismyjam';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_IS_DENIED = 'Доступ запрещен, неверный пароль!';
const CANCELED_BY_USER = 'Отменено пользователем!';

const userPassword = prompt (ENTER_PASSWORD, ' ')

switch (userPassword) {
    case ADMIN_PASSWORD: message = ACCESS_IS_ALLOWED; break;
    case null: message = CANCELED_BY_USER; break;
    default: message = ACCESS_IS_DENIED;
}

alert (message);
