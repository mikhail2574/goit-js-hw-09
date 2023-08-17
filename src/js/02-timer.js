// Описаний в документації
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import 'notiflix/dist/notiflix-3.2.6.min.js';

const btn = document.querySelector('[data-start]');
let selectedDate = null;

let date = new Date();

let daysOut = document.querySelector('[data-days]');
let hoursOut = document.querySelector('[data-hours]');
let minutesOut = document.querySelector('[data-minutes]');
let secondsOut = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate <= date.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btn.setAttribute('disabled', '');
    } else {
      setTimeout(() => btn.removeAttribute('disabled'), 100);
    }
  },
};

flatpickr(document.getElementById('datetime-picker'), options);

// Hand Made
let setDate = function () {
  setInterval(
    () => {
      date = new Date();
      let rest = selectedDate - date.getTime();
      let daysQuantity = Math.floor(rest / 1000 / 60 / 60 / 24);
      daysOut.innerHTML = String(daysQuantity).padStart(2, '0');
      rest -= daysQuantity * 1000 * 60 * 60 * 24;
      let hoursQuantity = Math.floor(rest / 1000 / 60 / 60);
      hoursOut.innerHTML = String(hoursQuantity).padStart(2, '0');
      rest -= hoursQuantity * 1000 * 60 * 60;
      let minutesQuantity = Math.floor(rest / 1000 / 60);
      rest -= minutesQuantity * 1000 * 60;
      minutesOut.innerHTML = String(minutesQuantity).padStart(2, '0');
      let secondsQuantity = Math.floor(rest / 1000);
      rest -= secondsQuantity * 1000;
      secondsOut.innerHTML = String(secondsQuantity).padStart(2, '0');
    },

    1000
  );
};

btn.addEventListener('click', setDate);
