window.onload = function() {
  let divEl = document.querySelector('div');
  divEl.addEventListener('mousemove', mMove);
  divEl.addEventListener('mouseout', mLeave);
};

function mMove() {
  console.log('mouse move')
}
function mLeave() {
  console.log('mouse leave')
}
// const divElement = document.querySelector('div');
