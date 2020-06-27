// ************
// TASK 4.01 **
// ************

const divEl = document.querySelectorAll('div');

// let timeout = divEl.forEach(e => {
//   temp = e.dataset.time;
//   console.log(temp);
// });

divEl.forEach(e => {
  e.addEventListener('click', el => {
    setTimeout(function() {
      // el.preventDefault(); // or maybe stopPropagation?
      el.target.classList.add('clicked'); console.log(el.currentTarget);
    }, e.dataset.time);
  });
});

// ************
// TASK 4.02 **
// ************
const bodyEl = document.querySelector('body');

bodyEl.addEventListener('click', removeClass);

function removeClass() {
  const divEl = document.querySelectorAll('div');
  divEl.forEach(el => el.classList.remove('clicked'));
};

// Uważaj na kontekst dla `this` oraz pierwszy parametr dla callback-a - możliwe, że będzie potrzebna użyć dodatkowej zmiennej.

// o co tutaj chodzi z tym callbackiem?
