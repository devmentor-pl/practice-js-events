const divList = document.querySelectorAll('div')

divList.forEach(function (item) {

    const addClass = function () {
        const time = item.dataset.time;
        setTimeout(function () {
            item.classList.add('clicked');
        }, time)
    }
    item.addEventListener('click', addClass)
})

const bodyEl = document.querySelector('body')

const removeClass = function (e) {

    if (e.target === e.currentTarget) {
        divList.forEach(function (item) {
            item.classList.remove('clicked')
        })
    }
}

bodyEl.addEventListener('click', removeClass)
