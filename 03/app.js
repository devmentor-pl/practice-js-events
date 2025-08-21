'use strict';
const btnsList = document.querySelectorAll('button');

const changeText = function () {
  this.innerText = 'clicked';
  this.removeEventListener('click', changeText);
  console.log('clicked');
};

btnsList.forEach(function (btnEl) {
  btnEl.addEventListener('click', changeText);
});
