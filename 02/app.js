const init = function() {
  const divEl = document.querySelector('div');

  const handleMouseMove = function(){
    showInfo();
  };
  
  const handleMouseLeave = function(){
    console.log('mouse leave');
    let text = 'mouse leave';
    divEl.innerText = '';
    divEl.innerText = text;
  };

  const showInfo = function() {
    console.log('mouse move');
    let text = 'mouse move';
    divEl.innerText = ''
    divEl.innerText = text;
    }

  
  if(divEl) {
    divEl.addEventListener('mousemove', handleMouseMove);
    divEl.addEventListener('mouseleave', handleMouseLeave);
  }
  
}

document.addEventListener('DOMContentLoaded', init);


