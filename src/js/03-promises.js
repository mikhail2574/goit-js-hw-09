// Описаний в документації
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import 'notiflix/dist/notiflix-3.2.6.min.css';
import 'notiflix/dist/notiflix-3.2.6.min.js';

let firstDelay = document.querySelector("[name='delay']");
let step = document.querySelector("[name='step']");
let amount = document.querySelector("[name='amount']");
let form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  setTimeout(() => {
    for (let i = 0; i < amount.value; i++) {
      createPromise(i, step.value);
    }
  }, firstDelay.value);
});

function createPromise(position, delay) {
  let timeCounter = Number(firstDelay.value) + position * Number(delay);
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, timeCounter });
      } else {
        reject({ position, timeCounter });
      }
    }, timeCounter);
  });

  return promise
    .then(({ position, timeCounter }) => {
      Notiflix.Notify.success(
        `Fullfilled promise ${position + 1} in ${timeCounter}ms`
      );
    })
    .catch(({ position, timeCounter }) => {
      Notiflix.Notify.failure(
        `Rejected promise ${position + 1} in ${timeCounter}ms`
      );
    });
}
