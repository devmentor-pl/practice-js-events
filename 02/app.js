document.addEventListener('DOMContentLoaded', function(){

    const divElement = document.querySelector('div');
    const p = document.querySelector('p');

    const mouseMove = function(el){

        let xPosition = el.clientX;
        let yPosition = el.clientY;

        p.innerText= ' Pozycja kursora to względem okna przeglądarki: X: ' + xPosition + ' i Y: ' + yPosition;
    }

    const mouseLeave = function() {
        p.innerText=' Mysz opuściła pole';
    }

    

    if(divElement && p){
        divElement.addEventListener('mousemove', mouseMove);
        divElement.addEventListener('mouseleave', mouseLeave);
    }
});

