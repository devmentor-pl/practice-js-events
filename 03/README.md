Treść zadania:

Ustaw na każdym elemencie `<button />` nasłuchiwanie dla zdarzenia `click` w taki sposób, aby do każdego nasłuchiwania był przypisany ten sam callback (funkcja wywoływana po zdarzeniu).

Wykonaj zadanie w taki sposób, że na każdym z przycisków, callback ma być wywołany tylko raz.

W momencie wywołania zdarzenia na danym elemencie, tekst znajdujący się wew. niego ma zostać zmieniony na `clicked` oraz ten sam tekst ma się pojawić w konsoli.


Rozwiązanie:

1. Wyszkuję wszystkie 'button' i przypisuję do zmiennej.

2. Tworze wyrażenie funkcyjne 'changeText':

    a) z racji tego, że callback docelowo ma wykonać się raz na danym elemencie tworzę wraunek if, który sprawdzi czy zdarzenie już nie wystąpiło,

    b)this -> w tym przypadku określa co zostało kliknięte, podpinam do tego właściwość textContent.

3. Na zmiennej zawierającej wyszukane elementy(NodeList) używam metody forEach, w której wskazuję co ma się stać z każdym elementem tzn: dodaję nasłuchiwanie na event 'click', oraz przekazuję callback, który ma być wywołany.