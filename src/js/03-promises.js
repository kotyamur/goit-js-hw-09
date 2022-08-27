const promisesInfoFormEl = document.querySelector('.form');

const onSubmitBtnClick = event => {
  event.preventDefault();
  
  let promiseDelay = Number(event.currentTarget.elements.delay.value);
  const promiseStep = Number(event.currentTarget.elements.step.value);
  const promiseAmount = event.currentTarget.elements.amount.value;

  for (let index = 1; index <= promiseAmount; index +=1) {
    createPromise(index, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    promiseDelay += promiseStep;
    console.log(promiseDelay)
  }
}

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

