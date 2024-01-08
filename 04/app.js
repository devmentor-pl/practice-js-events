// #4.01

const divEls = document.querySelectorAll('div');

divEls.forEach(function(element) {
    // Dodaj nasłuchiwanie zdarzenia 'click' na elementach 'div'.
    element.addEventListener('click', function() {
        // Jeśli element nie posiada klasy 'clicked'
        if (!this.classList.contains('clicked')) {
            // Dodaj klase 'clicked' na aktualnie kliknietym elemencie.
            this.classList.add('clicked');
            console.log("Dodano klase clicked");
        }
    });
});

// #4.02

const bodyEl = document.querySelector('body');

bodyEl.addEventListener('click', function(event) {
    // Sprawdź, czy kliknięcie nastąpiło bezpośrednio na body, a nie na potomku
    if (event.target === bodyEl) {
        // Usuń klasę 'clicked' ze wszystkich elementów div
        divEls.forEach(function(element) {
            element.classList.remove('clicked');
            console.log("Usunięto klase clicked");
        });
    }
});
