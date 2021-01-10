# Ćwiczenie #04

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

> Każdy z podpunktów wykonaj w przedstawionej kolejności

## #04.01

Utwórz nasłuchiwanie na elementy `<div/>` na zdarzenie `click`. W momencie kliknięcia na dany element (użyj `this` lub `e.currentTarget`) ma zostać dodana do niego nowa klasa `clicked`.

## #04.02

Nasłuchuj również element `<body/>` na kliknięcie. W momencie kiedy kliknięcie następuję tylko i wyłącznie na `body` to należy usunać klasy `clicked` z każdego elementu `<div/>`;

## #04.03

Dodaj efekt odstępu czasowego pomiędzy kliknięciem, a zmianą koloru. Wykorzystaj `setTimeout` oraz dane zapisane w `dataset` każdego z `div-ów`. Uważaj na kontekst dla `this` oraz pierwszy parametr dla callback-a - możliwe, że będzie potrzebna użyć dodatkowej zmiennej.

Po kliknięciu na najbardziej zagnieżdżony `<div/>` (zielone obramowanie) chcemy uzyskać efekt automatycznego zakolorowania wszystkich elementów `<div/>` w odpowiednich odstępach czasu.

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://github.com/devmentor-pl/practice-js-events)
