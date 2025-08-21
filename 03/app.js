const handleClick = function () {
  this.innerText = 'clicked';
  console.log('clicked');
  this.removeEventListener('click', handleClick)
};

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', handleClick);
});