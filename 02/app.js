

const showInfo1 = function () {
    console.log('cursor is on div')
}
const showInfo2 = function () {
    console.log('cursor is out of div')
}
const init = function () {
    const divElement = document.querySelector('div')
    divElement.addEventListener('mousemove', showInfo1)
    divElement.addEventListener('mouseleave', showInfo2)
}

document.addEventListener('DOMContentLoaded', init)




