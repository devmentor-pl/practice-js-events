const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const pList = document.querySelectorAll('[data-id]');

function countClick(e) {
    e.preventDefault();
    const hrefAttr = e.target.getAttribute('href');
    const dataAttr = e.target.getAttribute('data-id');

    if (Object.keys(stats.paragraphs).includes(dataAttr)) {
        stats.paragraphs[dataAttr] += 1;
    }
    else if (Object.keys(stats.links).includes(hrefAttr)) {
        stats.links[hrefAttr] += 1;
    } else {
        if (e.target.tagName.includes('A')) {
            const newLink = hrefAttr;
            stats.links[newLink] = + 1;
        } else {
            const newP = dataAttr;
            stats.links[newP] = + 1; // do konsultacji ;)
        }
    }
}

pList.forEach(p => {
    p.addEventListener('click', countClick)
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
        //dla każdego obiektu w stats tworzysz <ul>
        html += '<ul>';

        for(let key in data[elementType]) {
            // w każdym obiekcie stats dla właściwości w nim zawartych tworzysz <li> z nazwą właściwości i jej wartością 
            
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
}); //sprawdzamy czy kliknęliśmy na link lub paragraf - jeśli tak, to odpalamy funkcję odpalającą customowy event, który uruchomi funkcję wyświetlającą statystyki
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement)); //wywołanie funckji renderStats, która tutaj generuje listę statystyk z wykorzystaniem obiektu stats i wrzuca dzieci do elementu HTML (section klasy .stats)
document.addEventListener('DOMContentLoaded', fireCustomEvent(statsElement, 'render')); //gdy załadujesz DOM, odpal funkcję fireCustomEvent, która odpala event i odpowiada za wyświetlanie section => 'render' w konsoli.
//Odpalony event uruchamia funkcję renderStats.bind powyżej

