document.addEventListener('DOMContentLoaded', function () {

    const counterEl = document.querySelectorAll('button'); // All - wszystkie button'y

    counterEl.forEach(function (button) { // zgodnie z prezentacją lepiej nie uzywać f(x) strzałkowej - tutaj nie mmay this więc w sumie można by było zostawić strzałkową 
        let value = 0;

        const incrementCounter = function () {
            value++; // kolejne wartości
            button.innerText = 'clicked'; // przypisuje nową wartość
            console.log('clicked'); // info w konsoli

            if (value > 0) { // mogę zmienić na inną wartość będzie działo elastyczniej dlatego let 
                // WAŻNE NIE MOZE BYĆ 1, 0 - ZERO TO PIERWSZA WARTOŚC W ARR
                button.removeEventListener('click', incrementCounter);
                // usuwam nasłuchiwanie, gdy [value] przekroczy wartość 0 - NIE 1!!
            }
        };

        button.addEventListener('click', incrementCounter);

    });

});


// Drugie rozwiązanie 

document.addEventListener('DOMContentLoaded', function () {

    const counterEl2 = document.querySelectorAll('button');

    counterEl2.forEach(function (button) { // iteruje po każdym buttonie

        const clickButton = function () {

            button.innerText = 'clicked'; // wartość txt
            console.log('clicked 2'); // konsola 

        };

        button.addEventListener('click', clickButton, { once: true }); // nasłuchiwanie po kliku, ClickButton wowoła raz bo 3 wartość to once: true;

    });

});