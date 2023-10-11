document.addEventListener('DOMContentLoaded', function() {
    const divE1 = document.querySelector('div');

    const onEnter = function() {
        divE1.innerHTML = 'jestem w środku';
        console.log('jestem w środku');
    }

    const onLeave = function() {
        divE1.innerHTML = 'jestem na zewnątrz';
        console.log('jestem na zewnątrz');
    }

    divE1.addEventListener('mousemove', onEnter);
    divE1.addEventListener('mouseleave', onLeave);
});