const divList = document.querySelectorAll('div')
const body = document.querySelector('body')

const clicked = function (e) {
    e.currentTarget.classList.add('clicked')
}

const unClicked = function (e) {
    if (e.target === e.currentTarget) {
        divList.forEach(function (item) {
            item.classList.remove('clicked')
        })
    }
}

divList.forEach(function (item) {
    item.addEventListener('click', clicked)
})

body.addEventListener('click', unClicked)