const divList = document.querySelectorAll('div');

divList.forEach(function (item) {
    item.addEventListener('click', addClass)
})
document.body.addEventListener('click', removeClass);

function addClass(e) {
    let time = this.dataset.time;
    const thisDiv = this;
    setTimeout(function () {
        thisDiv.classList.add('clicked')
    }, time);
}

function removeClass(e) {
    if (e.target === e.currentTarget) {
        divList.forEach(function (item) {
            item.classList.remove('clicked')
        })
    }
}