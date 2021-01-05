const divElement = document.querySelector('div');

const onMouseMove = function () {
    console.log('mouse move');
}

const onMouseLeave = function () {
    console.log('mouse leave');
}

if (divElement) {
    divElement.addEventListener('mousemove', onMouseMove);
    divElement.addEventListener('mouseleave', onMouseLeave);
}