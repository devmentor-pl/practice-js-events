document.addEventListener('DOMContentLoaded', init)

function init() {
    const divElement = document.querySelector('div')

    if(divElement) {
        divElement.addEventListener('mousemove', function(){
            console.log('mousemove')
        })

        divElement.addEventListener('mouseleave', function(){
            console.log('mouseleave')
        })
    }
}