function onLoadedCont() {
  const divList = document.querySelectorAll('div');

  //powinnam sprawdzać ifem czy tablica jest pusta, czy w zasadzie to niepotrzebne, bo pętla i tak nie miałaby po czym iterować?
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
    // e.stopPropagation() // zadanie nie precyzuje, czy po kliknięciu na najbardziej zagnieżdżony div, chcemy zakolorować wszystkie prostokąty, czy jednak każdy z osobna. Jeśli to drugie, to należałoby odkomentować e.stopPropagation()
  }

  function removeClass() {
    divList.forEach(element => {
      element.classList.remove('clicked')
    });
  }

  document.body.addEventListener('click', removeClass)
}
document.addEventListener('DOMContentLoaded', onLoadedCont)