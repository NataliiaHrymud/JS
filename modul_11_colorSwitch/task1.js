const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector("[data-action='start']"),
  stop: document.querySelector("[data-action='stop']"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; 

let curIndex;
let isActive = false;
let intervalId;

refs.start.addEventListener("click", () => {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    curIndex = randomIntegerFromInterval(0, colors.length);
    refs.body.style.backgroundColor = colors[curIndex];
  }, 1000);
});

refs.stop.addEventListener("click", () => {
  if (isActive) {
    clearInterval(intervalId);
    isActive = false;
  }
});



/* Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
  на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, 
  изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), 
используй функцию randomIntegerFromInterval.   */