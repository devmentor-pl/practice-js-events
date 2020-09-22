function onMouseOver() {
  console.log('You\'re hovering over the div')
}
function onMouseLeave() {
  console.log('You left the div')
}
function afterContentLoad() {
  const divEl = document.querySelector('div');

  if (divEl) {
    divEl.addEventListener('mouseover', onMouseOver);
    divEl.addEventListener('mouseleave', onMouseLeave)
  }
}

document.addEventListener('DOMContentLoaded', afterContentLoad)
