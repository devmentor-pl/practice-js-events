const div = document.querySelectorAll('div')
const arr = [...div]

const addClass = function () {
    this.setAttribute('class', "clicked");

    const self = this;
    const timeOut = this.dataset.time;
    setTimeout(function () {
        self.setAttribute('class', "clicked");
    }, timeOut)

}



arr.forEach(function (item) {
    item.addEventListener('click', addClass)

});
const body = document.querySelector('body');

const removeClass = function () {
    arr.forEach(function (item) {
        item.classList.remove('clicked')
    })

}
body.addEventListener('click', removeClass, true)