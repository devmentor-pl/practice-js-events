const init = function() {
    const divElement = document.querySelector('div');
    
    const showTextMove = function() {
        console.log('cursor has moved');
    }

    const showTextOut = function() {
        console.log('cursor has left the element');
    }

    divElement.addEventListener('mousemove', showTextMove);
    divElement.addEventListener('mouseout', showTextOut);
}

document.addEventListener('DOMContentLoaded', init);


