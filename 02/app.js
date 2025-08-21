const box = document.querySelector('div')
const onMove = function () {
    console.log('Mouse is moving!')
}
const onLeave = function () {
    console.log('Mouse is out of the box!')
}

if (box) {
    box.addEventListener('mousemove', onMove)
}

if (box) {
    box.addEventListener('mouseleave', onLeave)
}