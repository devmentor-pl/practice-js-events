// Twoim zadaniem jest zbudowanie prostego systemu zliczającego kliknięcia w linki na stronie.

// Stwórz go tak, aby:

// nie powodować przeładowania strony, tylko zliczać kliknięcia w konkretny link o klasie .link (identyfikowany po atrybucie href),
// sumować kliknięcia w paragraf o klasie .text (identyfikowany po dataset).
// Zadanie wykonaj w taki sposób, aby nasłuchiwanie było ustawione tylko na elementy <p/>. Po każdym kliknięciu należy zaktualizować strukturę danych. Początkowo wygląda ona następująco:

// const stats = {
//     paragraphs: {
//         'p1': 0,
//     },
//     links: {
//         '/dolor.html': 0,
//     }
// };
// Zapis p1: 0 oznacza zero kliknięć w paragraf o atrybucie data-id z wartością p1. Natomiast '/dolor.html': 0 oznacza zero kliknięć w link o atrybucie href z wartością /dolor.html.

// Zanim przystąpisz do zadania, zapoznaj się z kodem w pliku app.js. Jest tam już napisana cześć kodu, która renderuje dane przechowywane w zmiennej stats. Twoim zadaniem jest napisanie części odpowiedzialnej za zliczanie kliknięć.

// PS. W moim rozwiązaniu wykorzystuję metodę .bind(). Jeśli chcesz się dowiedzieć więcej na jej temat, to zapraszam do odwiedzenia strony javascript.info.

const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
// const aList = document.querySelectorAll('p');

const pList = document.querySelectorAll('p');

if (pList) {

    // console.log(pList)
}
const addLinkClicks = function (e) {
    // console.log(e.target, e.currentTarget)
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (typeof stats.links[href] === 'undefined') {
            stats.links[href] = 0;
        }
        stats.links[href]++;

        console.log(stats.links[href])
    }
    if (e.target.tagName === 'P') {
        const pEl = e.target.getAttribute(['data-id']);
        if (typeof stats.paragraphs[pEl] === 'undefined') {
            stats.paragraphs[pEl] = 0;
        }
        stats.paragraphs[pEl]++;
    }
}



const addParagraphClicks = function (e) {
    console.log('paragraph was clicked')
}


/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent(event);
}

const renderStats = function (data, element) {
    let html = '';
    for (let elementType in data) {
        html += '<ul>';

        for (let key in data[elementType]) {

            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function (e) {
    const tagName = e.target.tagName;
    if (tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

pList.forEach(function (pEl) {
    pEl.addEventListener('click', addLinkClicks)
})

// pList.forEach(function (pEl) {
//     pEl.addEventListener('click', addParagraphClicks)
// })

