const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

//Twoim zadaniem jest zbudowanie prostego systemu zliczającego klinięcia w linki na stronie. W obecnym rozwiązaniu przeglądarka ma nie przeładowywać strony tylko zliczać klinięcia w konkretny link tj. .link (identyfikowany po atrybucie href) oraz sumować kliknięcia w paragraf tj. .text (identyfikowany po dataset).
//Zadanie wykonaj w taki sposób, aby nasłuchiwanie było ustawione tylko na elementy <p/>


/*musisz napierw podpiać event klik na <p> .
Potem sprawdzić czy klikany element to <p> czy <a>. przez e.target.
W zależności od tego pobierasz identyfikator danego elementu zapisyny jako id lub href.
Wtedy dopiero robisz ikrementację.*/

const pList = document.querySelectorAll('p');
console.log(pList);


const clickCounter = function (e) {
    e.preventDefault();

    if (e.target.tagName === 'P') {
        const id = e.target.dataset.id;

        if (typeof stats.paragraphs[id] === 'undefined') {
            stats.paragraphs[id] = 0;
        }
        ++stats.paragraphs[id];

    }

    else {

        const href = e.target.getAttribute('href');
        console.log('href');
        if (typeof stats.links[href] === 'undefined') {
            stats.links[href] = 0;
        }
        ++stats.links[href];
    }
}

pList.forEach(function (e) {
    e.addEventListener('click', clickCounter);
});
/*Zadania działa częściowo. Gdy kliknę w <p> to nic się nie dzieje - pewnie dlatego, że nie ma eventu click.
Druga sprawa jest taka, że zadanie miałoby tak wykonane, że zdarzenie klik może być podpięte tylko pod paragraf (a nie również pod <a>). Tutaj należałoby to sprawdzić wew. eventu - na jakim elemencie jest on wywołany przez e.target.*/





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

