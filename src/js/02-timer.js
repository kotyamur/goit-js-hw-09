import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startTimerBtn = document.querySelector('button[data-start]');
const dateTimeInput = document.querySelector('#datetime-picker');

startTimerBtn.disabled = true;

console.log(startTimerBtn);
console.log(dateTimeInput);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < new Date()) {
            window.alert('Please choose a date in the future');
        }
        if (selectedDates[0] > new Date()) {
            startTimerBtn.disabled = false;
        }
    },
};

const fp = flatpickr(dateTimeInput, options);
console.log(fp);


const onStartTimerBtnClick = () => {
    console.log('click');
};
startTimerBtn.addEventListener('click', onStartTimerBtnClick);
