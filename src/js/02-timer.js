import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startTimerBtn = document.querySelector('button[data-start]');
const dateTimeInput = document.querySelector('#datetime-picker');
const daysNumberEl = document.querySelector('[data-days]');
const hoursNumberEl = document.querySelector('[data-hours]');
const minutesNumberEl = document.querySelector('[data-minutes]');
const secondsNumberEl = document.querySelector('[data-seconds]');

startTimerBtn.disabled = true;

const addLeadingZero = (value) => {
    return String(value).padStart(2, '0');
}

const onDatePicker = selectedDates => {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
        window.alert('Please choose a date in the future');
        return
    }
    startTimerBtn.disabled = false;
    
    const currentTime = options.defaultDate;
    const currentTimeNumber = currentTime.getTime();
    const selectedDateNumber = selectedDates[0].getTime();
    const deltaTime = selectedDateNumber - currentTimeNumber;
    const time = convertMs(deltaTime);
    console.log(time);
    daysNumberEl.textContent = addLeadingZero(time.days);
    hoursNumberEl.textContent = addLeadingZero(time.hours);
    minutesNumberEl.textContent = addLeadingZero(time.minutes);
    secondsNumberEl.textContent = addLeadingZero(time.seconds);
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: onDatePicker,
};

flatpickr(dateTimeInput, options);

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
