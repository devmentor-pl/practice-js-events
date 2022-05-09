document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM')

const divElement = document.querySelector(['div'])
console.log(divElement)

if(divElement) {
    divElement.addEventListener('mousemove', function() {
        console.log('poruszanie się myszy')
    })
    divElement.addEventListener('mouseleave', function() {
        console.log('opuszczanie elementu')
    })
}
})
