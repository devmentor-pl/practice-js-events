
const domLoad = function () {

    const elementDiv = document.querySelector('div');
    const showInfoMove = function () {
        console.log('Poruszanie się na elemencie: ');

    }
    const showInfoLeave = function () {
        console.log('Opuszczanie elementu: ');
    }

    if (elementDiv) {
        elementDiv.addEventListener('mousemove', showInfoMove);
        elementDiv.addEventListener('mouseleave', showInfoLeave);
    }
}




document.addEventListener('DOMContentLoaded', domLoad);