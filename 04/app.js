document.addEventListener('DOMContentLoaded', function () {

    const btnsList = document.querySelectorAll('div');
    const bodyElement = document.querySelector('body');

        // do 4.01 i 4.02

    const changeClass = function (event) { 

        // dlaczego dodanie txt powoduje zniknięcie div??? this.innerText = 'clicked'; // zmień tekst na klikniętym elemencie
        // do 4.01 i 4.02 this.classList.add('clicked');
        // event.stopPropagation(); // przerwanie aby inny div był poza dalszym nasłuchiwaniem po kliku


        delayBackgound(this); // funkcja opoźnienia poniżej 


    };

    // do 4.03

    const delayBackgound = function (item) { // dodatkowa zmienna którą użyje nizej

        const dalay = parseInt(item.dataset.time); // pobieram data-time - opóźnienje

        setTimeout(function () {
            item.classList.add('clicked');
        },
            dalay);
    };

    // 4.02

    const clickBody = function (eventBody) {
        if (eventBody.target === bodyElement) {
            btnsList.forEach(function (div) {
                div.classList.remove('clicked');
            })
        }
    };

    bodyElement.addEventListener('click', clickBody)

    btnsList.forEach(function (buttonList) {
        buttonList.addEventListener('click', changeClass); // tutaj odpalam pętle dla każdego diva odpala się funkcja - changeClass -> delayBackgound 
    });

});
