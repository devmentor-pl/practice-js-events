// ************
// TASK 4.01 **
// ************

const divEl = document.querySelectorAll('div');
divEl.forEach(e => {
  e.addEventListener('click', el => {
    el.stopPropagation();
    el.target.classList.add('clicked');
    console.log(el.currentTarget);
  });
});

// ************
// TASK 4.01 **
// ************


// ************
// TASK 4.01 **
// ************


// ************
// TASK 4.01 **
// ************
