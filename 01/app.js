const showMessage = function() {
  console.log('clicked')
}

const button = document.querySelector('button');

if(button) {
  button.addEventListener('click', showMessage);
}