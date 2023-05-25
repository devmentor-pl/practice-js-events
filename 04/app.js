const divElements = document.querySelectorAll('div')
const body = document.querySelector('body')

const setTimeoutCallback = function () {
    this.classList.add('clicked')
}

const addClass = function (e) {
    const time = this.dataset.time
    
    setTimeout(setTimeoutCallback.bind(this), time)
}

const removeClass = function (e) {
    const clickedDivElements = document.querySelectorAll('.clicked')

    clickedDivElements.forEach(function (clickedDiv) {
        clickedDiv.classList.remove('clicked')
    })
}

divElements.forEach(function (div) {
    div.addEventListener('click', addClass)
})

if (body) {
    body.addEventListener('click', removeClass)
}