const divElement = document.querySelector('div');

const init = function () {
    const divElement = document.querySelector('div');

    if (divElement) {
        divElement.addEventListener('mouseenter', mouseenterFunction)
        divElement.addEventListener('mouseleave', mouseleaveFunction)
    }
}


const mouseenterFunction = function () {
    console.log('najechałam  myszką na diva')
}
const mouseleaveFunction = function () {
    console.log('zjechałam myszką z diva')
}


document.addEventListener('DOMContentLoaded', init)