// wyszukaj element <button>
const buttonEl = document.querySelector('button');

// warunek: jeśli button istnieje
if(buttonEl) {
    // dodaj nasłuchiwanie zdarzenia 'click' do znalezionego elementu 'button'
    buttonEl.addEventListener('click', function() { 
        console.log('clicked');
    });
}