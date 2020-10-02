const buttonList = document.querySelectorAll('button');
const buttonClickHandler = function () {
    this.innerText = 'clicked';
    console.log('clicked');
    this.removeEventListener('click', buttonClickHandler);
}

buttonList.forEach(function(button) {
    button.addEventListener('click', buttonClickHandler);
})