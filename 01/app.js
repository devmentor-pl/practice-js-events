const buttonEl = document.querySelector('button');

const handleClick = function() {
  console.log(`clicked`)
}

if(buttonEl) {
  buttonEl.addEventListener('click', handleClick);
}