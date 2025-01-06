
document.addEventListener('DOMContentLoaded', function(){
    const divElement = document.querySelector('div');
    if(divElement) {
        console.log(divElement);
        divElement.addEventListener('mousemove', function(){
            console.log('moving');
        })
        divElement.addEventListener('mouseleave', function(){
            console.log('cursor left')
        })
    }
   
})
