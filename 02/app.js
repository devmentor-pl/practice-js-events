const getDiv = function () {

    const div = document.querySelector('div');

    const move = function () {
        console.log('Poruszam się po div');
    }

    const leave = function () {
        console.log('Opuszczam div');
    }

    div.addEventListener('mousemove', move);
    div.addEventListener('mouseleave', leave);
}

document.addEventListener('DOMContentLoaded', getDiv);