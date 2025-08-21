// Wyszukaj wszystkie elementy <button>.
const buttonsEl = document.querySelectorAll('button');

// Sprawdź, czy istnieje przynajmniej jeden przycisk.
if (buttonsEl.length > 0) {
    // Zadeklaruj funkcję zwrotną (callback).
    const changeText = function() {
        // Zmień tekst wewnątrz przycisku na 'clicked'.
        this.innerText = 'clicked';
        console.log('clicked');
        // Usuń nasłuchiwanie zdarzenia 'click' po pierwszym kliknięciu.
        this.removeEventListener('click', changeText);
    };

    // Iteruj przez każdy przycisk.
    buttonsEl.forEach(function(btnEl) {
        // Dodaj nasłuchiwanie zdarzenia 'click' i użyj funkcji zwrotnej (callback).
        btnEl.addEventListener('click', changeText);
    });
}
