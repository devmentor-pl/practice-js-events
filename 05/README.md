> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e06-js-events` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` JavaScript: Zdarzenia



Twoim zadaniem jest zbudowanie prostego systemu zliczającego klinięcia w linki na stronie. W obecnym rozwiązaniu przeglądarka ma nie przeładowywać strony tylko zliczać klinięcia w konkretny link tj. `.link` (identyfikowany po atrybucie `href`) oraz sumować kliknięcia w paragraf tj. `.text` (identyfikowany po `dataset`).

Zadanie wykonaj w taki sposób, aby nasłuchiwanie było ustawione tylko na elementy `<p/>`. Po każdym kliknięciu należy zaktualizować sturkturę danych. Początkowo ona wygląda następująco.

```
const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};
```

Gdzie `p1: 0` oznacza zero kliknięć w paragraf o atrybucie `data-id` ustawionym na `p1`. Natomiast `'/dolor.html': 0` oznacza zero kliknięć w link o atrybucie `href` zawierający `/dolor.html`.

Zanim przystąpisz do zadania zapoznaj się z kodem w pliku app.js.
Jest tam już napisana cześć kodu, która renderuje dane przechowywane w zmiennej `stats`.
Twoim zadaniem jest tylko napisanie cześciu odpowiedzialnej za zliczanie klików.

PS. W moim rozwiązaniu wykorzystuję funkcję [.bind()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Function/bind). Jeśli chcesz się dowiedzieć więcej na jej temat to zapraszam do odwiedzenia strony [javascript.info](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Function/bind).*


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
