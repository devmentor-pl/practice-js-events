
const init = function () {
    const divEl = document.querySelector('div')

    divEl.addEventListener('mousemove', function () {
        console.log('mouse moved on element')
    });

    divEl.addEventListener('mouseleave', function () {
        console.log('mouse leaved element')
    });
}

document.addEventListener('DOMContentLoaded', init)

