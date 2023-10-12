//Wybieram wszystkie elementy <div> na stronie
const divE1 = document.querySelectorAll('div');

//Funkcja obslugujaca klikniecie w <div>
const showClick = function(event) {
    //Pobieram wartosc atrybutu z data-time z biezacego elementu i przeksztalcam go w liczbe
    const dataTime = parseInt(this.dataset.time || 0);
    //Ustawiam opoznienie przed dodaniem klasy
    setTimeout(() => {
        if (this.tagName === 'DIV') {
            this.classList.add('clicked');
            console.log('clicked');
        }
    }, dataTime);
};

//Funkcja obslugujaca klikniecie na elemencie <body>
const deleteClick = function() {
    divE1.forEach( function(div) {
        div.classList.remove('clicked');
    })
    console.log('deleted');
    
}
divE1.forEach( function(item) {
    item.addEventListener('click', showClick);
});

document.body.addEventListener('click', deleteClick);

