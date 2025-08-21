document.addEventListener('DOMContentLoaded', function() {

    const divElement = document.querySelector('div');
    
    if (divElement) {
        divElement.addEventListener('mousemove', function() {
            console.log('Kursor znajduje się nad elementem');
        })
        divElement.addEventListener('mouseleave', function() {
            console.log('Kursor opuścił element');
        })
    }
});