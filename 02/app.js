const init = function () {
    const divElement = document.querySelector('div');
    const moveOn = function () {
        console.log('Cursor moves over the div!');
    }
    const leaveBy = function () {
        console.log('Cursor left the div!')
    }
    if (divElement) {
        divElement.addEventListener('mousemove', moveOn);
        divElement.addEventListener('mouseleave', leaveBy);
    }
}

document.addEventListener('DOMContentLoaded', init);
