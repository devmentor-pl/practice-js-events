const divList = document.querySelectorAll('div')
const body = document.querySelector('body')

const addClass = function (e) {
    let currentClass = this.classList
    const time = this.dataset.time
    
    setTimeout(function () {
        currentClass.add('clicked')
    }, time)

    this.removeEventListener('click', addClass)
}

const removeClassClicked = function (e) {
    if (e.target.tagName === 'BODY') {
        divList.forEach(function (item) {
            if (item.className) {
                item.classList.remove('clicked')
                item.addEventListener('click', addClass)
            }
        })
    }
}

divList.forEach(function (item) {
    item.addEventListener('click', addClass)
})

body.addEventListener('click', removeClassClicked)