
const divsList = document.querySelectorAll('div');
const bodyEl = document.querySelector('body');


const addClassToElement = function (e) {

    if (e.toElement.className === 'child') {
        divsList.forEach(function (divEl) {
            setTimeout(function () { divEl.classList.add('clicked'); }, divEl.dataset.time);
        });
    } else {
        this.classList.add('clicked');
    }

}

const removeClassToElement = function () {

    divsList.forEach(function (divEl) {
        divEl.classList.remove('clicked');
    });
}

divsList.forEach(function (divEl) {
    divEl.addEventListener('click', addClassToElement);
});

bodyEl.addEventListener('click', removeClassToElement, true);

