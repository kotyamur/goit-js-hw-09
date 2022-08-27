const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

const toggleFlow = isStarted => {
  startBtn.disabled = isStarted;
  stopBtn.disabled = !isStarted;
};

const setRandomBackground = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

const onStartBtnClick = () => {
  toggleFlow(true);
  setRandomBackground();
  timerId = setInterval(setRandomBackground, 1000);
};

const onStopBtnClick = () => {
  toggleFlow(false);
  clearInterval(timerId);
};

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
