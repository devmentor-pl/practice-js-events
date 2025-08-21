const init = function () {
  const divEl = document.querySelector('div');
  if (divEl) {
    divEl.addEventListener('mousemove', handleMoveInside);
    divEl.addEventListener('mouseenter', handleIn);
    divEl.addEventListener('mouseleave', handleOut);
  }
};
// Waiting for DOM load
document.addEventListener('DOMContentLoaded', init);

const handleMoveInside = function (e) {
  console.log(`x: ${e.x} || y: ${e.y} `);
};

const handleIn = function (e) {
  console.log(`${e.clientX}`);
  console.log('Mouse entered the div');
};

const handleOut = function () {
  console.log('Mouse leaved the div');
};
