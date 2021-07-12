
const init = function() {
  const divEl = document.querySelector('div');
  

  function handleMouseMove (e) {
    console.log(`MouseMove: ${e.x} : ${e.y}`)
  }

  function handleMouseLeave () {
    console.log('MouseLeave')
  }

  if(divEl) {
  divEl.addEventListener('mousemove', handleMouseMove);
  divEl.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener('DOMContentLoaded', init);

