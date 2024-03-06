//KONSULTACJE: 
//1. Funkcja stats links - nie mogę przypisać kliknięcia w konkretny link
// nie mogę wydzielić klikniętego linku; linia #39 wyświetla wszystkie 6 linków

const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

console.log(stats.links['/dolor.html']);
//DZIAlA - STATS.PARAGRAPHS
const countClicksInPar = function(event) { 
    event.preventDefault();

   const id = this.dataset.id;
   console.log(this.dataset.id);
   if(typeof stats.paragraphs[id] === 'undefined') {
       stats.paragraphs[id] = 0;
    }
   
    stats.paragraphs[id]++;
    // stats.links['/dolor.html']++;
}

// FUNKCJA stats.links

const countClicksInLinks = function(event) { 
    event.preventDefault();
    //atrybut href zawiera string o treści html '[href*="html"]':
    const hrefLinkList = document.querySelectorAll('a[href]');
    
    hrefLinkList.forEach(function(link) {
        // POBIERZ WARTOSC ATRYBUTU
        const href = link.getAttribute('href'); // !!! powinny być tu linki
        console.log(href); // linki all
        if(href !== '[href*="consectetur"]') {
            stats.links['/consectetur.html'] = 0; 
        } else if(href !== '/adipisicing-elite.html') {
            stats.links['/adipisicing-elite.html'] = 0; 
        }
        stats.links[href]++;
    })
}
// wyszukuję listę elementów <p>
const pElementList = document.querySelectorAll('p');

// sprawdzam, który <p> został kliknięty
pElementList.forEach(function(el) {
el.addEventListener("click", countClicksInPar)
})

// wyszukuję linki po klasie .link
// dodaję do nich nasłuchiwanie kliknięcia i wywołuję funkcję
const linkList = document.querySelectorAll('.link'); //Node List
linkList.forEach(function(link) {
    link.addEventListener('click', countClicksInLinks);
})









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

