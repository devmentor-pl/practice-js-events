const btns = document.querySelectorAll('button');

const changeText = function () {
    this.innerText = 'clicked';
    this.removeEventListener('click', changeText);
}

btns.forEach(function (item) {
    item.addEventListener('click', changeText);
});