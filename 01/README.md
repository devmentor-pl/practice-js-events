Treść zadania:

Wyszukaj element `<button/>` i ustaw na nim nasłuchiwanie w momencie klinięcia.
Kiedy nastąpi kliknięcie w konsoli powinien się pojawić napis `clicked`.


Rozwiązanie 1(szybsze/prostsze):

Pobieram button, i dodaje do Niego event 'click', po wywołaniu którego wywoływana jest funkcja anonimowa.



Rozwiązanie 2(bardziej eleganckie):

-Pobieram wszystkie buttony i przypisuję je do zmiennej

-tworzę wyrażenie funkcyjne, które będzie przekazywane przy evencie,

-na btn(NodeList) wykonuję pętlę forEach, w której dla każdego elementu(buttona), dodaję nasłuchiwanie na event 'click' oraz przekazuję wyrażenie funkcyjne.