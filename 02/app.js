document.addEventListener('DOMContentLoaded', init);

function init() {
    const divDisplay = document.querySelector('div');
    if(divDisplay){
        divDisplay.addEventListener('mouseleave', onLeave);
        divDisplay.addEventListener('mousemove', onMove);
    }
}

function onLeave() {
    console.log('mouseleave');
}
function onMove() {
    console.log('mousemove');
}