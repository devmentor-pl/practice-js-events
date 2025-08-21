const divList = document.querySelectorAll('div');

function addClass(e) {
  setTimeout(() => {
    this.classList.add('clicked');
    console.log(this);
  }, parseInt(this.dataset.time));
}

function removeClass(e) {
  divList.forEach((div) => {
    div.classList.remove('clicked');
  });
}

divList.forEach((div) => {
  div.addEventListener('click', addClass);
});

document.body.addEventListener('click', removeClass);
