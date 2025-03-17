const divElement = document.querySelector('div')

const onEnter = function () {
    console.log('Mouse pointer enter div')
}
const onLeave = function () {
    console.log('Mouse pointer leaved div')
}

if(divElement) {
    divElement.addEventListener('mouseenter', onEnter)
    divElement.addEventListener('mouseleave', onLeave)
}