document.addEventListener('DOMContentLoaded', function() {
    // Wyszukaj element <div>.
    const divEl = document.querySelector('div');

    // Warunek: Jeśli element istnieje.
    if (divEl) {
        // Dodaj nasłuchiwanie zdarzenia ruchu myszką.
        divEl.addEventListener('mousemove', function(e) {
            // Wyświetl komunikat z aktualną pozycją myszki na elemencie.
            console.log(`Mouse x position: ${e.x} | Mouse y position: ${e.y}`);
        });

        // Dodaj nasłuchiwanie zdarzenia opuszczenia elementu przez kursor.
        divEl.addEventListener('mouseleave', function() {
            console.log("Mouse left element");
        });
    }
});
