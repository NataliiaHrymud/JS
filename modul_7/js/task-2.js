'use strict';
//  Напиши скрипт, который для каждого элемента массива ingredients создаст 
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
//  Для создания DOM-узлов используй document.createElement()
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const items = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.innerText = ingredient;
    return item;
});

const listItems = document.querySelector('#ingredients');

listItems.append(...items);
console.log(listItems);



// БЫЛО: (есть замечание ментора - см.ниже)
// let list = document.getElementById('ingredients');
// for (let item of ingredients) {
//   let li = document.createElement('li');
//   li.innerHTML = item;
//   list.appendChild(li);
// }
// console.log(list);

// Замечание ментора:
// task-2.js Обращение к DOM внутри цикла - плохое решениие. Приритет в работе с DOM это минимизаций обращений к DOM. 
// В этом заднии приоритет выражается в том, чтобы добавить массив элементов за одно обращение. 
// Обратите внимание на прием   parent.append(...items)

