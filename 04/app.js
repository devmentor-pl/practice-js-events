const divList = document.querySelectorAll('div');

divList.forEach(function (item) {
    item.addEventListener('click', addClass)
})
document.body.addEventListener('click', removeClass);

function addClass(e) {
    this.classList.add('clicked');
    if (this.tagName === 'DIV') {
        e.stopPropagation();
    }
}

function removeClass() {
    divList.forEach(function (item) {
        item.classList.remove('clicked')
    })
}