//Wyszukuje wszystkie przyciski i zapisuje je do zmiennej 'btnGroup'
const btnGroup = document.querySelectorAll('button');

// Tworze funkcje 'showInfo' ktora bedzie wyswietlac w konsoli komunikat 'clicked'
// oraz zmieniac tekst przycisku na 'clicked' oraz wylaczac przycisk
const showInfo = function(event) {
    //Pobieram przycisk ktory byl zrodlem zdarzenia (klikniecia)
    const button = event.target;
    //Wyswietlam w konsoli komunikat 'clicked'
    console.log('clicked');
    //Zmieniam tekst przycisku na 'clicked'
    button.textContent = 'clicked';
    //Dezaktywuje przycisk
    this.disabled = true;
}

//Dodaje nasluchiwanie na klikniecie dla kazdego przycisku 
btnGroup.forEach( function(item) {
    item.addEventListener('click', showInfo);
})