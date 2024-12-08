const init = function() {
    const div = document.querySelector('div');

    const move = function() {
        console.log('Not so fast!')
    }
    
    const bye = function() {
        console.log("Bye Bye!")
    }
    
    if(doesExist(div))
    {
        div.addEventListener('mousemove', move);
        div.addEventListener('mouseleave', bye);
    }
    
}

document.addEventListener('DOMContentLoaded', init);

const doesExist = function(element1) {
    if(element1 !== null) {
        return element1;
    }
    else {
        console.log('nie znaleziono elemntu')
    }
}