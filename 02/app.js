
const mouse = function () {

    const divElement = document.querySelector('div');

    if (divElement) {
        divElement.addEventListener('mousemove', mouseMove);
        divElement.addEventListener('mouseleave', mouseLeave);
    }
}

const mouseMove = function () {
    console.log('mouse move');

}

const mouseLeave = function () {
    console.log('mouse leave');

}
document.addEventListener('DOMContentLoaded', mouse);


