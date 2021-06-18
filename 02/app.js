// const init = function() {
//     const 
// }
const init = function () {  //założyłam, że nie można zmieniać pliku w html
    const divElement = document.querySelector('div');
    divElement.addEventListener('mousemove', function () {
        console.log('Mousemove on divElement')
    });
    divElement.addEventListener('mouseleave', function () {
        console.log('Mouse left div element')
    });
}

document.addEventListener('DOMContentLoaded', init);