document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('div');

  const onMove = function () {
    container.innerText = 'najechanie na element';
  };
  const onLeave = function () {
    container.innerText = 'opuszczenie elementu';
  };

  if (container) {
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
  }
});
