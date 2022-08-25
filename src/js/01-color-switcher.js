const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.disabled = true;

let timerId = null;

const onStartBtnClick = () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    document.body.style.backgroundColor = getRandomHexColor();

    timerId = setInterval(() => {
        const newColor = getRandomHexColor();
        console.log(newColor);
        document.body.style.backgroundColor = newColor;
    }, 1000);
}

const onStopBtnClick = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
};

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}