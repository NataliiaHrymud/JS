'use strict';
// console.log('hello!')

import galleryItems from "./gallery-items.js";

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const img = lightbox.querySelector('.lightbox__image');

gallery.addEventListener('click', openLightBox);
lightbox.addEventListener('click', closeLightBox);

const  createImages = galleryItems.reduce(
  (result, {preview, original, description}) => {
    result += `<li class="gallery__item">
      <a
        class="gallery__link" 
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    return result;
  }, ''
);

gallery.insertAdjacentHTML ('afterbegin', createImages);


function openLightBox(e) {
  e.preventDefault();
  window.addEventListener("keydown", handleKeyDown);
  lightbox.classList.add("is-open");
  // img.src = '';
  img.src = e.target.dataset.source;
}

function handleKeyDown(e) {
  if (e.key === "Escape") {
    // console.log ('key: ', e.key);
    // console.log ('keyCode: ', e.keyCode);
    closeLightBox(e);
    return;
  }
}

function closeLightBox(e) {
  // console.log(e);
  if (e.target === img) {
    return;
  }
  img.src = '';
  window.removeEventListener("keydown", closeLightBox);
  lightbox.classList.remove("is-open");
}



/* Разбей задание на несколько подзадач:

Создание и рендер разметки по массиву данных и предоставленному шаблону.
Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
Открытие модального окна по клику на элементе галереи.
Подмена значения атрибута src элемента img.lightbox__image.
Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, 
чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее. 
Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, 
и указываться в href ссылки (это необходимо для доступности).
*/

// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img,
//  и указываться в href ссылки (это необходимо для доступности).
// <li class="gallery__item">
//   <a
//     class="gallery__link" 
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>   

/* Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

Закрытие модального окна по клику на div.lightbox__overlay.
Закрытие модального окна по нажатию клавиши ESC.
Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо". */



