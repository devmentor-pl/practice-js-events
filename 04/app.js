const allDivs = document.querySelectorAll('div');

const handleClickDivs = function () {
    let time = this.dataset.time;
    setTimeout(function () {
        this.classList.add('clicked');
    }.bind(this), time);
};

const removeClickedClass = function (e) {
    if (e.target.tagName === 'BODY') {
        allDivs.forEach(function (el) { el.classList.remove('clicked') });
    };
};

allDivs.forEach(function (el) { el.addEventListener('click', handleClickDivs) });
document.body.addEventListener('click', removeClickedClass);
