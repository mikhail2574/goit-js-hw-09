const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const container = document.querySelector('body');
let changeColor = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let onClick = () => {
  startBtn.removeEventListener('click', onClick);
  startBtn.style.cursor = 'not-allowed';
  stopBtn.style.cursor = 'pointer';
  startBtn.style.backgroundColor = 'rgb(65, 120, 122)';
  stopBtn.style.backgroundColor = 'cadetblue';
  changeColor = setInterval(() => {
    container.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

startBtn.addEventListener('click', onClick);

stopBtn.addEventListener('click', () => {
  clearInterval(changeColor);
  startBtn.addEventListener('click', onClick);
  startBtn.style.cursor = 'pointer';
  stopBtn.style.cursor = 'not-allowed';
  stopBtn.style.backgroundColor = 'rgb(65, 120, 122)';
  startBtn.style.backgroundColor = 'cadetblue';
});
