# Ćwiczenie #05

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Twoim zadaniem jest zbudowanie prostego systemu zliczającego klinięcia w linki na stronie. W obecnym rozwiązaniu przeglądarka ma nie przeładowywać strony tylko zliczać klinięcia w konkretny link tj. `.link` (identyfikowany po atrybucie `href`) oraz sumować kliknięcia w paragraf tj. `.text` (identyfikowany po `dataset`).

Zadanie wykonaj w taki sposób, aby nasłuchiwanie było ustawione tylko na elementy `<p/>`. Po każdym kliknięciu należy zaktualizować strukturę danych. Początkowo ona wygląda następująco.

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
Twoim zadaniem jest tylko napisanie części odpowiedzialnej za zliczanie klików.

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://github.com/devmentor-pl/practice-js-events)
