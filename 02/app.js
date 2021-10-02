document.addEventListener('DOMContentLoaded', function(){

    const divElement = document.querySelector('div');
    const p = document.querySelector('p');

    const mouseMove = function(el){

        let xPosition = el.clientX;
        let yPosition = el.clientY;
        // if (xPosition && yPosition > 0) {
            p.innerText= ' Pozycja kursora to: względem okna przeglądarki: X: ' + xPosition + ' i Y: ' + yPosition;
        // }
        // else {
        //     console.log('d');
        // }
    }

    const mouseLeave = function(el) {
        p.innerText=' Mysz opuściła pole';
    }

    if(divElement){
        divElement.addEventListener('mousemove', mouseMove);
        divElement.addEventListener('mouseleave', mouseLeave);
    }
});

