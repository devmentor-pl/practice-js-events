const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pList = document.querySelectorAll('p');
const aList = document.querySelectorAll('a');

pList.forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        const id = element.dataset.id;
        // Sprawdzam czy istnieje klucz (identyfikator paragrafu) w obiekcie stats.links. 
        //Jesli nie to tworze go i ustawiam wartosc na 0
        //Jesli istnieje to zwiekszam wartosc o 1
        stats.paragraphs[id] = (stats.paragraphs[id] || 0) + 1;
    });
});

aList.forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        const href = element.getAttribute('href');
        // Sprawdzam czy istnieje klucz (adres URL linku) w obiekcie stats.links. 
        //Jesli nie to tworze go i ustawiam wartosc na 0
        //Jesli istnieje to zwiekszam wartosc o 1
        stats.links[href] = (stats.links[href] || 0) + 1;
    });
});
/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent( event );
}

const renderStats = function(data, element) {
    let html = '';
    for(let elementType in data) {
        html += '<ul>';

        for(let key in data[elementType]) {
            
            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}

document.addEventListener('click', function(e) {
    const tagName = e.target.tagName;
    if(tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

