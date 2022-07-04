const buttons = document.querySelectorAll('button');

const changeOnClick = function () {
    console.log('clicked');
    this.innerText = 'clicked';
    this.removeEventListener('click', changeOnClick);
};

buttons.forEach(function (button) {
    button.addEventListener('click', changeOnClick);
});