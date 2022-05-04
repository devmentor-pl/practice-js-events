document.addEventListener('DOMContentLoaded', init);

const mouseOver = () => console.log('mouse over the div element');
const mouseLeave = () => console.log('mouse leaves the div element');

function init() {
  const divElement = document.querySelector('div');
  if(divElement) {
    divElement.addEventListener('mousemove', mouseOver);
    divElement.addEventListener('mouseleave', mouseLeave);
  }
}