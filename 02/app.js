
const checkContent = function() {
    const divElement = document.querySelector('div');

    const mousOver = function() {
        console.log('Mouse over');
    }
    divElement.addEventListener('mousemove', mousOver);

    const mousLeave = function() {
        console.log('Mouse leave');
    }
    divElement.addEventListener('mouseleave', mousLeave);
}

document.addEventListener('DOMContentLoaded', checkContent)