const divsList = document.querySelectorAll('div');
const bodyEl = document.querySelector('body');

const addClassClicked = function (e) {
    if (this.className === 'child' || this.className === 'parent' || this.className === 'grandparent') {
        // e.stopPropagation();
        // e.currentTarget.classList.add('clicked');
        const el = this;
        const delay = Number(el.dataset.time);
        setTimeout(function () {
            el.classList.add('clicked');
        }, delay);
    }
}

const removeClass = function (e) {
    // console.log(this.tagName);
    if (this.tagName === 'BODY') {
        const classToRemoveList = document.getElementsByClassName('clicked')
        const arr = Array.from(classToRemoveList);
        arr.forEach(function (e) {
            e.classList.remove('clicked');
        })
    }
}

divsList.forEach(function (divEl) {
    divEl.addEventListener('click', addClassClicked)
})

bodyEl.addEventListener('click', removeClass)