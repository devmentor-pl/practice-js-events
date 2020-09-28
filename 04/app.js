function onLoadedCont() {
  const divList = document.querySelectorAll('div');

  divList.forEach(element => {
    element.addEventListener('click', addClass)
  });

  // setTimeout(() => {
  //   this.classList.add('clicked');
  //   this.stopPropagation()
  // }, 300)

  function addClass(e) {
    setTimeout(() => {
      this.classList.add('clicked');
    }, this.dataset.time)
  }

  function removeClass() {
    divList.forEach(element => {
      element.classList.remove('clicked')
    });
  }

  document.body.addEventListener('click', removeClass)
}
document.addEventListener('DOMContentLoaded', onLoadedCont)