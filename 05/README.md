Treść zadania:
Zdaniem jest zbudowanie prostego systemu zliczającego klinięcia w linki na stronie. W obecnym rozwiązaniu przeglądarka ma nie przeładowywać strony tylko zliczać klinięcia w konkretny link tj. `.link` (identyfikowany po atrybucie `href`) oraz sumować kliknięcia w paragraf tj. `.text` (identyfikowany po `dataset`).

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
