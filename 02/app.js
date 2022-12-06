const init = function() {
    const div = document.querySelector('div');

    const move = function() {
        console.log('Not so fast!')
    }
    
    const bye = function() {
        console.log("Bye Bye!")
    }
    
    div.addEventListener('mousemove', move);
    div.addEventListener('mouseleave', bye);
}

document.addEventListener('DOMContentLoaded', init);