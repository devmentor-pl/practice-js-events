const stats = {
    paragraphs: {
        p1: 0
    },
    links: {
        '/dolor.html': 0
    }
};

/* tutaj umieść swój kod */
// mozna to rowniez ogarnac za pomoca dwoch funkcji

function addToStats(type, id) {
    if (stats[type][id]) {
        stats[type][id]++;
    } else {
        stats[type][id] = 1;
    }
}

function calculateClicks(element) {
    element.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            addToStats('links', href);
        }

        if (e.target.tagName === 'P') {
            const id = e.target.dataset.id;
            addToStats('paragraphs', id);
        }
    });
}

const pElements = document.querySelectorAll('p');
pElements.forEach(pEl => calculateClicks(pEl));

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true
    });

    element.dispatchEvent(event);
};

const renderStats = function (data, element) {
    let html = '';
    for (let elementType in data) {
        html += '<ul>';

        for (let key in data[elementType]) {
            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>';
    }

    element.innerHTML = html;
};

document.addEventListener('click', function (e) {
    const tagName = e.target.tagName;
    if (tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener(
    'render',
    renderStats.bind(this, stats, statsElement)
);
document.addEventListener(
    'DOMContentLoaded',
    fireCustomEvent.bind(null, statsElement, 'render')
);
