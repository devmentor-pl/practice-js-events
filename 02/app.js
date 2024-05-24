document.addEventListener('DOMContentLoaded', function() {
    const divElement = document.querySelector('div')
    if(divElement) {
        divElement.addEventListener('mousemove', mouseMove)
        divElement.addEventListener('mouseleave', mouseLeave);
    }
});

const mouseMove = function() {
    console.log('mouse is moving over the div area')
}

const mouseLeave = function() {
    console.log('mouse left the div area')
}