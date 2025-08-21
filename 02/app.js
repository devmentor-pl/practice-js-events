const init = function() {
    const divElement = document.querySelector('div');
    console.log(divElement);
    const onMove = function() {
        console.log('Cursor is moving on the element');
        divElement.textContent = 'Cursor is moving on the element';

    }
    
    const onLeave = function() {
        console.log('Cursor left the element');
        divElement.textContent = 'Cursor left the element';
    }
    
    divElement.addEventListener('mousemove', onMove);
    divElement.addEventListener('mouseleave', onLeave);
}

document.addEventListener('DOMContentLoaded', init);





