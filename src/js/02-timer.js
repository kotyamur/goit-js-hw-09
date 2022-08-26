import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startTimerBtn = document.querySelector('button[data-start]');
const dateTimeInput = document.querySelector('#datetime-picker');
const daysNumberEl = document.querySelector('[data-days]');
const hoursNumberEl = document.querySelector('[data-hours]');
const minutesNumberEl = document.querySelector('[data-minutes]');
const secondsNumberEl = document.querySelector('[data-seconds]');
console.log(daysNumberEl);

startTimerBtn.disabled = true;

console.log(startTimerBtn);
console.log(dateTimeInput);

const onDatePicker = selectedDates => {
  console.log(selectedDates[0]);
  if (selectedDates[0] < new Date()) {
    window.alert('Please choose a date in the future');
  }
  if (selectedDates[0] > new Date()) {
    startTimerBtn.disabled = false;
    }
    console.log(selectedDates[0].getTime());
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: onDatePicker,
};

const fp = flatpickr(dateTimeInput, options);
console.log(fp.selectedDates);


const onStartTimerBtnClick = () => {
    console.log('click');
};
startTimerBtn.addEventListener('click', onStartTimerBtnClick);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}