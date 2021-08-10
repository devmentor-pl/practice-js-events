const divsList = document.querySelectorAll('div');

const removeClass = function (arr, className) {
    return arr.forEach(el => {
        el.classList.remove(className);
    });
}

const addClassName = function (e) {
    if (e.target.className !== 'child') {
        this.classList.add('clicked');
        e.stopPropagation();
    } else {
        removeClass(divsList, 'clicked');
        setTimeout(() => {
            this.classList.add('clicked');
        }, this.dataset.time);
    }
}

const removeClassBodyClick = function (e) {
    if (e.target.tagName === 'BODY') {
        removeClass(divsList, 'clicked');
    }
}

divsList.forEach(el => el.addEventListener('click', addClassName));
document.body.addEventListener('click', removeClassBodyClick);