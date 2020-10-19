const init = function(){


const divElement = document.querySelector('div');

const mouseMoved = function(){
    console.log('Leave my square!')
}

const mouseLeft = function(){
    console.log('Thanks!')
}

divElement.addEventListener('mousemove', mouseMoved);
divElement.addEventListener('mouseleave', mouseLeft);


}

document.addEventListener('DOMContentLoaded', init);