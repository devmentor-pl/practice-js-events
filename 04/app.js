function onLoadedCont() {
  const divList = document.querySelectorAll('div');

  divList.forEach(element => {
    element.addEventListener('click', addClass)
  });

  function addClass() {
    setTimeout(() => {
      this.classList.add('clicked');
    }, this.dataset.time)
  }

  function removeClass(e) {
    if (e.target === document.body) {
      divList.forEach(element => {
      element.classList.remove('clicked')
    });
    }
  }

  document.body.addEventListener('click', removeClass)
}
document.addEventListener('DOMContentLoaded', onLoadedCont)