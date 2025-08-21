const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElements = document.querySelectorAll('p');

function attachHandler(element) {
    element.addEventListener('click', clickHandler);
}

function elementStatsHandler(stat, attr) {
    if (!stats[stat][attr]) {
        stats[stat][attr] = 0;
    }
    stats[stat][attr]++;
}

function clickHandler(event) {
    event.preventDefault();
    if (event.target.tagName === "P") {
        const attr = event.target.dataset.id;
        elementStatsHandler('paragraphs', attr);
        return;
    } 
    if (event.target.tagName === "A") {
        const attr = event.target.getAttribute('href')
        elementStatsHandler('links', attr);
    }
}

pElements.forEach(attachHandler);


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

