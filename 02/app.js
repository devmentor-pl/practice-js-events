//DZIAŁA
const divEl = document.querySelector('div');

divEl.addEventListener('mousemove', mouseMove);
divEl.addEventListener('mouseleave', mouseLeave);

function mouseMove() {
    console.log('Poruszenie się kursorem');
}

function mouseLeave() {
    console.log('Opuszczenie elementu przez kursor');
}