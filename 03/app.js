const button = document.querySelectorAll('button');


button.forEach((element) => {
    element.addEventListener('click', changeText);
});

function changeText() {
    console.log('clicked');
    this.textContent = 'clicked';
    this.removeEventListener('click', changeText);
}

