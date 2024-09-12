document.addEventListener('DOMContentLoaded', function () {

    const divEl = document.querySelector('div')
    const moveCursor = function (e) {
        console.log('poruszanie się kursora nad tym elementem')
    }
    const leaveCursor = function (e) {
        console.log('opuszczenie elementu przez kursor')
    }

    divEl.addEventListener('mousemove', moveCursor)
    divEl.addEventListener('mouseleave', leaveCursor)
})