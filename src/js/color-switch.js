import ref from './refs.js';
const { btnStart, btnStop, body } = ref;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    // чтобы кнопка Start была не активна после первого нажатия
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);

    this.addDisabled(btnStart);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;

    this.removeDisabled(btnStart);
  },

  addDisabled(el) {
    el.setAttribute('disabled', '');
  },

  removeDisabled(el) {
    el.removeAttribute('disabled');
  },
};

btnStart.addEventListener('click', timer.start.bind(timer));
btnStop.addEventListener('click', timer.stop.bind(timer));
