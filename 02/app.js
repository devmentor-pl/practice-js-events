const init = function() {
    const div = document.querySelector('div');
    const onMove = function() {
        console.log('move...');
    }
    const onLeave = function() {
        console.log('leave...');
    }

    if(div) {
        div.addEventListener('mousemove', onMove);
        div.addEventListener('mouseleave', onLeave);
        }
}

document.addEventListener('DOMContentLoaded', init);