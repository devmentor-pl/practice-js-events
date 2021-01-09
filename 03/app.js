const btns = document.querySelectorAll('button');

const changeText = function () {
    let value = parseInt(this.innerText);
    this.innerText = value++;

    if (value > 1) {
        let value = toString(this.innerText);
        this.innerText = 'clicked';
        this.removeEventListener('click', changeText);
    }
}

btns.forEach(function (item) {
    item.addEventListener('click', changeText);
});