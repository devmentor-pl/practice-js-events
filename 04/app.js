const divElements = document.querySelectorAll('div')

divElements.forEach(function (div) {
    div.addEventListener('click', function () {

        setTimeout(function () {
            div.classList.add('clicked')
        }, div.dataset.time)
    })
})

const body = document.querySelector('body')

body.addEventListener('click', function () {

    divElements.forEach(function (div) {
        div.classList.remove('clicked')
    })
}, true)