//szukam elementu button
const btnE1 = document.querySelector('button');
//sprawdzam czy znalazlem button
if(btnE1) {
    //dodaje nasluchiwanie na klikniecie
    btnE1.addEventListener('click', () => {
        //wyswietlam w konsoli komunikat
        console.log('clicked');
    })
}