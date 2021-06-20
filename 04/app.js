//4.01
// Utwórz nasłuchiwanie na elementy <div/> na zdarzenie click. W momencie kliknięcia na dany element (użyj this lub e.currentTarget) ma zostać dodana do niego nowa klasa clicked.


const divList = document.querySelectorAll('div');
const bodyElement = document.querySelector('body');

//4.03
//Dodaj efekt odstępu czasowego pomiędzy kliknięciem, a zmianą koloru. Wykorzystaj setTimeout oraz dane zapisane w dataset każdego z div-ów. Uważaj na kontekst dla this oraz pierwszy parametr dla callback-a - możliwe, że będzie potrzebna użyć dodatkowej zmiennej.

//Po kliknięciu na najbardziej zagnieżdżony <div/> (zielone obramowanie) chcemy uzyskać efekt automatycznego zakolorowania wszystkich elementów <div/> w odpowiednich odstępach czasu.
const divListClicked = function (el) {

    const clickThis = el.currentTarget;
    setTimeout(function () {
        clickThis.classList.add('clicked');
    }, clickThis.dataset.time);
}

divList.forEach(function (e) {
    e.addEventListener('click', divListClicked);
    console.log('clicked');
})

//4.02
//Nasłuchuj również element <body/> na kliknięcie. W momencie kiedy kliknięcie następuję tylko i wyłącznie na body to należy usunać klasy clicked z każdego elementu <div/>;

bodyElement.addEventListener('click', function () {
    divList.forEach(function (element) {
        element.classList.remove('clicked');
    })
})
















