function init() {
    const divElement = document.querySelector('div')

    if(divElement) {
        divElement.addEventListener('mousemove',function() {
            alert('mouse move')
        })
        divElement.addEventListener('mouseleave', function() {
            alert('mouse leave')
        })
    }
}

document.addEventListener('DOMContentLoaded', init)