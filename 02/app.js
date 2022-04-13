
const init = function(){
    const divElement = document.querySelector('div');

    const infoMove = function(){
        console.log('mousemove')
}

    const infoLeave = function(){
        console.log('mouseleave')
}

    divElement.addEventListener('mousemove', infoMove);
    divElement.addEventListener('mouseleave', infoLeave);
    
}

document.addEventListener('DOMContentLoaded', init)


