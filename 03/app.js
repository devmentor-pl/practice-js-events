const buttonsList = document.querySelectorAll('button');

function onClick() {
    console.log('clicked');
    const elementClicked = this;
    elementClicked.innerText = 'clicked';
    elementClicked.removeEventListener('click', onClick);
}

buttonsList.forEach(function (button) {
    button.addEventListener('click', onClick);
});