const init = function(){
    const divElement = document.querySelector('div')
    if(divElement){
        divElement.addEventListener('mouseenter', mouseOnElement);
        divElement.addEventListener('mouseleave', mouseleaveElement)
    }
}

const mouseOnElement = function (e) {
    console.log('mouse is on <div> element')
}
const mouseleaveElement = function (e) {
    console.log('mouse leave <div> element')
}

document.addEventListener('DOMContentLoaded', init)
