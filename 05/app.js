const stats = {
    paragraphs: {
        'p1': 0,
       
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
// runkcja do zliczania kliknięć w linki
function countLinkClicks(event) {
    event.preventDefault();
    const link = event.currentTarget.getAttribute('href');

    if (link && stats.links.hasOwnProperty(link)) {
        stats.links[link]++;
        fireCustomEvent(statsElement, 'render');
    }
}

// funkcja do zliczania kliknięć w paragrafy
function countParagraphClicks(event) {
    const datasetId = event.currentTarget.dataset.id;

    if (datasetId && stats.paragraphs.hasOwnProperty(datasetId)) {
        stats.paragraphs[datasetId]++;
        fireCustomEvent(statsElement, 'render');
    }
}

// nasłuchiwanie kliknięć w linki o klasie .link
const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', countLinkClicks);
});

// nasłuchiwanie kliknięć w paragrafy o klasie .text
const paragraphs = document.querySelectorAll('.text');
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', countParagraphClicks);
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