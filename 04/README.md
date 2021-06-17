Treść zadania :
Każdy z podpunktów wykonaj w przedstawionej kolejności

a)
Utwórz nasłuchiwanie na elementy `<div/>` na zdarzenie `click`. W momencie kliknięcia na dany element (użyj `this` lub `e.currentTarget`) ma zostać dodana do niego nowa klasa `clicked`.

b)
Nasłuchuj również element `<body/>` na kliknięcie. W momencie kiedy kliknięcie następuję tylko i wyłącznie na `body` to należy usunać klasy `clicked` z każdego elementu `<div/>`;

c)

Dodaj efekt odstępu czasowego pomiędzy kliknięciem, a zmianą koloru. Wykorzystaj `setTimeout` oraz dane zapisane w `dataset` każdego z `div-ów`. Uważaj na kontekst dla `this` oraz pierwszy parametr dla callback-a - możliwe, że będzie potrzebna użyć dodatkowej zmiennej.

Po kliknięciu na najbardziej zagnieżdżony `<div/>` (zielone obramowanie) chcemy uzyskać efekt automatycznego zakolorowania wszystkich elementów `<div/>` w odpowiednich odstępach czasu.


Rozwiązanie:

1. Wyszukuję wszystkie divy i przypisuję je do zmiannej.
2. Tworzę wyrażenie funkcyjne addClass:

   a) Przypisuję this do zmiennej self, z racji tego, że używając this w ciele metody setTimeout zmieniłby się jego kontekst i nie wskazywałby już(w tym wypadku) na klikniętego diva.

   b)dodaję warunek if, powodujący, że klasę 'clicked' dostanie tylko faktycznie kliknięty div ( e.target ), poprzez zatrzymanie propagacji ( e.stopPropagation() )

3. Na NodeList wykonuję pętlę forEach, dodając na każdy element(div) nasłuchiwanie na 'click', jako callback przekazuję addClass.

4. Tworzę wyrażenie funkcyjne removeClass:

   a)piszę warunek sprawdzający czy element na któym wywołuję zdarzenie to 'BODY' (tagName zwraca nazwę elementu w formie kanonicznej, można użyć toLowerCase(), żeby zwracał nazwę elementu małymi literami).

5. Podpinam nasłuchwiwanie na event click pod body , i przekazuję removeClass jako callback;