'use strict';

const divsList = document.querySelectorAll('div');
const bodyEle = document.querySelector('body');

divsList.forEach((div) => {
  div.addEventListener('click', addClass);
});

bodyEle.addEventListener('click', removeClass);

function addClass() {
  const clickedDiv = this;
  const delay = clickedDiv.dataset.time;
  console.log(delay);
  setTimeout(function () {
    clickedDiv.classList.add('clicked');
  }, delay);
}

function removeClass() {
  divsList.forEach((div) => {
    div.classList.remove('clicked');
  });
}
