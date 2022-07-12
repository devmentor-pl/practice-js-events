const boxesList = document.querySelectorAll('div');
const body = document.querySelector('body');

const onClickAddClass = function () {
    this.classList.add('clicked');
}

const onClickRemoveClass = function (e) {
    if (e.target === e.currentTarget) {
        boxesList.forEach(function (box) {
            box.classList.remove('clicked');
        });
    }
}

if (boxesList.length !== 0) {
    boxesList.forEach(function (box) {
        box.addEventListener('click', onClickAddClass);
    });
}

if (body) {
    body.addEventListener('click', onClickRemoveClass);
}

