
const init = function(){   
    const divElement = document.querySelector('div');
    
    const mouseMoveHandle = function(){
        divElement.textContent = 'mouse over div';
    }
    
    const mouseLeaveHandle = function(){
        divElement.textContent = 'mouse left div';
    }
    
    divElement.addEventListener('mousemove', mouseMoveHandle);
    divElement.addEventListener('mouseleave', mouseLeaveHandle);
}

document.addEventListener('DOMContentLoaded', init)