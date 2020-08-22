// ************
// TASK 4.01 **
// ************

const divEl = document.querySelectorAll('div');


// let timeout = divEl.forEach(e => {
//   temp = e.dataset.time;
//   console.log(temp);
// });

// divEl.forEach(e => {
//   e.addEventListener('click', el => {
//     setTimeout(function() {
//       // el.preventDefault(); // or maybe stopPropagation?
//       el.target.classList.add('clicked'); console.log(el.currentTarget);
//     }, e.dataset.time);
//   });
// });
function addClass(el) {
  // el.classList.add('clicked');
  const target = el.currentTarget;
  target.classList.add('clicked');
};

divEl.forEach(item => {
  const divTime = item.dataset.time;
  item.addEventListener('click', e => {
    const self = e.currentTarget;
    // e.stopPropagation();
    setTimeout(() => {
      self.classList.add('clicked');
    }, divTime);
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