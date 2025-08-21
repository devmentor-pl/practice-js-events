const getButtons = document.querySelectorAll('button')

const changeText = function () {
    console.log('clicked');
    this.innerText = 'clicked';
    this.removeEventListener('click', changeText)
};

console.log(getButtons)

for (let i =0; i<getButtons.length; i++) {
    getButtons[i].addEventListener('click', changeText);
};
