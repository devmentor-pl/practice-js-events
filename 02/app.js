document.addEventListener('DOMContentLoaded', init);

function init() {
    const getDiv = document.querySelector('div');

    if(getDiv) {
        getDiv.addEventListener('mouseenter', function() {
            console.log('You are inside');
        });

        getDiv.addEventListener('mouseleave', function() {
            console.log('You left');
        });
    }
}