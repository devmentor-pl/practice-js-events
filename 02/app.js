document.addEventListener('DOMContentLoaded', function () {

    const divEl = document.querySelector('div');

    const onMove = function () {
        console.log('Poruszasz kursorem');
    }

    const onLeave = function () {
        console.log('Opuściłeś element');
    }

    if (divEl) {
        divEl.addEventListener('mousemove', onMove);
        divEl.addEventListener('mouseleave', onLeave);
    }

})

