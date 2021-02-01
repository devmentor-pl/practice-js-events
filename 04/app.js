const divEl = document.querySelectorAll('div');
const bodyEl = document.querySelector('body');



const clickedDiv = function () {
  const clicked = this;
  setTimeout(function () { clicked.classList.add('clicked'); }, clicked.dataset.time);

}

divEl.forEach(function (item) {
  item.addEventListener('click', clickedDiv);
})


bodyEl.addEventListener('click', function () {
  divEl.forEach(function (item) {
    item.classList.remove('clicked');
  })
})

