const divs = document.querySelectorAll('div');

const addClass = function (e) {
    console.log(e.target.className);
    if (e.target.className !== 'child') e.stopPropagation();
    setTimeout(() => {
        this.classList.add('clicked');
    }, this.dataset.time);
}

const removeClass = function () {
    divs.forEach(div => div.classList.remove('clicked'));
}

divs.forEach(div => div.addEventListener('click', addClass));
document.body.addEventListener('click', removeClass);