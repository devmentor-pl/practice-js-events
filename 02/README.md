Treść zadania:

Ustaw nasłuchiwanie na elemencie `<div/>` w przypadku kiedy kursor myszy porusza się nad tym elementem (wielokrotnie) oraz kiedy kursor opuszcza obszar tego elementu.

W obu przypadkach wyświetl w przeglądarce stosowny komunikat.



Rozwiązanie:

1.Tworzę wyrażenie funkcyjne aboveOrBeyond,

2. W ciele funckcji:
   a) wyszukuję element div,

   b) na wyszukanym elemencie dodaję event mousemove:

   - 'mousemove' -> wyzwalany za każdym razem, gdy skaźnik myszki jest przesuwany nad elementem div(porządana przez Nas wielokrotność),

   - 'mouseenter' -> zdarzenie wyzwalane jest tylko wtedy, gdy wskaźnik myszy najedzie na element div,

   - 'mouseover' -> zdarzenie wyzwalane jest tylko wtedy, gdy wskaźnik myszy najedzie na element div, oraz na jego dzieci.


   c) na wyszukanym elemencie dodaję event 'mouseleave':

   - 'mouseleave' -> zdarzenie wykonywane jest gdy wskaźnik myszy opuszcza obszar wskazanego elementu,

   - 'mouseout' ->  zdarzenie wykonywane jest, gdy wskaźnik myszy opuszcza obszar wskazanego elementu, ale również jego dzieci.


3. Plik JS został podpięty w head, dlatego dodaję linijkę kodu z metodą 'DOMContentLoaded'.