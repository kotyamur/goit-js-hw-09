import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promisesInfoFormEl = document.querySelector('.form');

const onSubmitBtnClick = event => {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let promiseDelay = Number(delay.value);
  const promiseStep = Number(step.value);
  const promiseAmount = Number(amount.value);

  for (let i = 1; i <= promiseAmount; i++) {
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 4000,
          width: '300px',
          clickToClose: true,
        });
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 2500,
          width: '300px',
          clickToClose: true,
        });
      });

    promiseDelay += promiseStep;
  }
};

promisesInfoFormEl.addEventListener('submit', onSubmitBtnClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
