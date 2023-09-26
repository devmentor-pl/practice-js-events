const divList = document.querySelectorAll('div')

const clicked = function (e) {
    e.currentTarget.classList.add('clicked')
}

divList.forEach(function (item) {
    item.addEventListener('click', clicked)
})
