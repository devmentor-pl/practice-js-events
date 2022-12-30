
const mainFn = function() {
    const divElement = document.querySelector('div');

    const mouseMove = function() {
        console.log('You are in the square');
    }
    const mouseLeave = function() {
        console.log('You are out of the square')
    }
    divElement.addEventListener('mousemove', mouseMove);
    divElement.addEventListener('mouseleave', mouseLeave);
}
document.addEventListener('DOMContentLoaded', mainFn); 