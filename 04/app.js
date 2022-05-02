const divElements = document.querySelectorAll('div');
const bodyElement = document.querySelector('body');

const addClassOnClick = function() {

  console.log(this);
  const element = this;
  const timeValue = this.dataset.time;

  function addClass(divEl) {
    divEl.classList.add('clicked')
  }
  setTimeout(addClass, timeValue, element);
}


const removeClassOnClick = function() {
  divElements.forEach(function(divEl) {
    divEl.classList.remove('clicked');
  });
}

divElements.forEach(function(divEl) {
  divEl.addEventListener('click', addClassOnClick);
})

bodyElement.addEventListener('click', removeClassOnClick, true);
