const divElements = document.querySelectorAll('div');
console.log(divElements);

divElements.forEach(div => {
  div.addEventListener('click', function() {
    const time = div.dataset.time;
    setTimeout(() => this.classList.add('clicked'), time)
  })
})