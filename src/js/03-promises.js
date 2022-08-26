const promisesInfoFormEl = document.querySelector('.form');
const createPromisesBtnEl = document.querySelector('button[type="submit"]')

promisesInfoFormEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.currentTarget.elements);
  
  console.log(event.currentTarget.elements.delay.value);
  console.log(event.currentTarget.elements.step.value);
  console.log(event.currentTarget.elements.amount.value);
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
