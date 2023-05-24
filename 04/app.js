const divElements = document.querySelectorAll('div')
const body = document.querySelector('body')

const setTimeoutCallback = function () {
    this.classList.add('clicked')
}


const addClass = function (e) {
    // e.stopPropagation()
    console.log('add')

    const time = this.dataset.time
    setTimeout(setTimeoutCallback.bind(this), time)
   
}

const removeClass = function (e) {
    // e.stopImmediatePropagation()
    console.log('remove')
    const clickedDivElements = document.querySelectorAll('.clicked')
    // console.log('body')

    clickedDivElements.forEach(function (clickedDiv) {
        clickedDiv.classList.remove('clicked')
    })
}

// #04.01

divElements.forEach(function (div) {
    div.addEventListener('click', addClass)
})

// #04.02

if (body) {
    body.addEventListener('click', removeClass)
}