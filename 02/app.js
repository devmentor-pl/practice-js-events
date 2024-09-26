document.addEventListener('DOMContentLoaded', start);

function start() {
    const divElement = document.querySelector('div');
    // console.log(divElement);
    divElement.addEventListener(
        'mousemove',
        function() {
            console.log('mousemove')
        });
        
    divElement.addEventListener(
        'mouseleave',
        function() {
            console.log('mouseleave')

        });

}
