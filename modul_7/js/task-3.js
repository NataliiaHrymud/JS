'use strict';
// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

const picturesGallery = createGallery(images);
gallery.insertAdjacentHTML("afterbegin", picturesGallery);
gallery.setAttribute('style', 'list-style-type:none; display: flex; justify-content: space-between;')

function createGallery(images){
  return images
    .map(item => createImages(item.url, item.alt))
    .join('');
};

function createImages(url, alt) {
  const gallery = `
    <li class="list-item">
    <img src="${url}" alt="${alt}" width="300">
    </li>`
  return gallery;
};