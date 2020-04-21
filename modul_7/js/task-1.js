'use strict';

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4


const selectedCategories = document.querySelectorAll('.item').length;     
console.log(`В списке ${selectedCategories} категории`);

const categories = document.querySelectorAll('.item');
console.log(categories);

categories.forEach((element) => {
    const h2Text = element.querySelector('h2').textContent;
    const quantityLi = element.querySelectorAll('li').length;
    console.log(`Категория: ${h2Text}, количество элементов: ${quantityLi}`);
})

