
const init = function () {
    const divElement = document.querySelector('div');

    if (divElement) {
        divElement.addEventListener('mousemove', onMouseMove);
        divElement.addEventListener('mouseleave', onMouseLeave);
    }
}

document.addEventListener('DOMContentLoaded', init);

const onMouseMove = function () {
    console.log('mouse move');
}

const onMouseLeave = function () {
    console.log('mouse leave');
}
