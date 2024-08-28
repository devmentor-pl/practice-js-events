const div = document.querySelector('div')

function mouseMoved() {
    console.log('the mouse has moved on the div element')
}
function mouseLeft() {
    console.log('the mouse has left the div element')
}

div.addEventListener('mousemove', mouseMoved)
div.addEventListener('mouseleave', mouseLeft)