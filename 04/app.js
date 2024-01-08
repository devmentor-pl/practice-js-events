const divEls = document.querySelectorAll('div');

divEls.forEach(function(element) {
    // Dodaj nasłuchiwanie zdarzenia 'click' na elementach 'div'.
    element.addEventListener('click', function() {
        // Jeśli element nie posiada klasy 'clicked'
        if (!this.classList.contains('clicked')) {
            // Dodaj klase 'clicked' na aktualnie kliknietym elemencie.
            this.classList.add('clicked');
        }
    });
});
