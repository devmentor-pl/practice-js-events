

document.addEventListener('DOMContentLoaded', function () {

    const div = document.querySelector('div');

    div.addEventListener('mousemove', function () {
        alert('Witaj w środku Div-a !');
    });

    div.addEventListener('mouseout', function () {
        alert('Opuszczasz Div-a !!!');
    });
});
