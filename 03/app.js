const button = document.querySelectorAll('button');


button.forEach(function (el) {
    el.addEventListener('click', changeText);
});

function changeText() {
    console.log('clicked');
    this.textContent = 'clicked';
    this.removeEventListener('click', changeText);
}

