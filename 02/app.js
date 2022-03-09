document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const boxElement = document.querySelector('div');
    

    if(boxElement) {
        boxElement.addEventListener('mousemove', function() {
            console.log('mousemove');
        });

        boxElement.addEventListener('mouseleave', function() {
            console.log('mouseleave');
        });
    }
}



