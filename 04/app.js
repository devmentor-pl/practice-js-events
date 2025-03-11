const divElements = document.querySelectorAll('div')
const bodyEl = document.querySelector('body')

const addClassClicked = function(e) {
    e.stopPropagation()
    this.classList.add('clicked')

    const time = this.dataset.time
    if(time) {
        colorChangeWithDelay(divElements, time)
    }
}

const removeClassClicked = function() {
    // if(e.target === bodyEl) {
        divElements.forEach(function(divEl){
        divEl.classList.remove('clicked')
        })
    // }
}

const colorChangeWithDelay = function(elements, startDelay) {
    let currentDelay = Number(startDelay)
    elements.forEach(function (element) {
        setTimeout(() => {
            element.classList.add('clicked')
        }, currentDelay)
        currentDelay += Number(element.dataset.time)
    })
}


divElements.forEach(function (divEl) {
    divEl.addEventListener('click', addClassClicked)
})
bodyEl.addEventListener('click', removeClassClicked)

