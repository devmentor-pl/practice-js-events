const buttons = document.querySelectorAll('button');

const deleteEvent = function () {
    this.innerText = 'clicked';
    console.log('clicked');
    this.removeEventListener('click', deleteEvent);
}

buttons.forEach(function (button) {
    button.addEventListener('click', deleteEvent);
});