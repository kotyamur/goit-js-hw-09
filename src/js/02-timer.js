import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startTimerBtn = document.querySelector('button[data-start]');
const dateTimeInput = document.querySelector('#datetime-picker');
const daysNumberEl = document.querySelector('[data-days]');
const hoursNumberEl = document.querySelector('[data-hours]');
const minutesNumberEl = document.querySelector('[data-minutes]');
const secondsNumberEl = document.querySelector('[data-seconds]');

let selectedTime;

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const setTimer = ({ days, hours, minutes, seconds }) => {
  daysNumberEl.textContent = addLeadingZero(days);
  hoursNumberEl.textContent = addLeadingZero(hours);
  minutesNumberEl.textContent = addLeadingZero(minutes);
  secondsNumberEl.textContent = addLeadingZero(seconds);
};

const onDatePicker = selectedDates => {
  selectedTime = selectedDates[0];
  if (selectedTime < new Date()) {
    window.alert('Please choose a date in the future');
    return;
  }
  startTimerBtn.disabled = false;
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: onDatePicker,
};

flatpickr(dateTimeInput, options);

const updateClockface = () => {
  const intervalId = setInterval(() => {
    const currentTimestamp = Date.now();
    const selectedTimestamp = selectedTime.getTime();
    const deltaTimestamp = selectedTimestamp - currentTimestamp;

    if (deltaTimestamp < 0) {
      clearInterval(intervalId);
      dateTimeInput.disabled = false;
      return;
    }

    setTimer(convertMs(deltaTimestamp));
  }, 1000);
};

const onStartTimerBtnClick = () => {
  startTimerBtn.disabled = true;
  dateTimeInput.disabled = true;
  updateClockface();
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
