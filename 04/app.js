const divEls = document.querySelectorAll('div');

// Iteruję przez wszystkie elementy 'div'.
divEls.forEach(function(element) {
    
    // Dodaj nasłuchiwanie zdarzenia 'click' na elementach 'div'.
    element.addEventListener('click', function() {
        
        // Jeśli element nie posiada klasy 'clicked', to wykonaj następujące:
        if (!this.classList.contains('clicked')) {
            
            // Pobierz opóźnienie zapisane w atrybucie 'data-time'.
            const delay = parseInt(this.dataset.time);
            
            // Zachowaj kontekst this.
            const self = this; 
            
            // Ustaw opóźnioną funkcję.
            setTimeout(function() { 
            
            // Dodaj klase 'clicked' na aktualnie kliknietym elemencie.
            self.classList.add('clicked');
            }, delay);
        }
    });
});

const bodyEl = document.querySelector('body');
// Dodaj nasłuchiwanie zdarzenia 'click' na elemencie body.

bodyEl.addEventListener('click', function(event) {
    
    // Sprawdź, czy kliknięcie nastąpiło bezpośrednio na body, a nie na potomku.
    if (event.target === bodyEl) {
        
        // Usuń klasę 'clicked' ze wszystkich elementów div.
        divEls.forEach(function(element) {
            element.classList.remove('clicked');
        });
    }
});