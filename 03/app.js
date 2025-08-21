const buttonList = document.querySelectorAll('button');

buttonList.forEach(function (element) {
  element.addEventListener('click', buttonClicked);
})

function buttonClicked () {
  this.innerText = 'clicked';
  console.log('clicked');
  this.removeEventListener ('click', buttonClicked);
}