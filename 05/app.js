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

const countClicks = function (e) {
    const currElement = e.target;
    if (currElement.getAttribute('href')) {
        e.preventDefault();
        updateObject(stats.links, currElement.getAttribute('href'));
        updateObject(stats.paragraphs, this.dataset.id);
    } else if (currElement.dataset.id) {
        updateObject(stats.paragraphs, currElement.dataset.id);
    }
}

pList.forEach(p => p.addEventListener('click', countClicks));

function updateObject(obj, key) {
    return typeof obj[key] === 'undefined' ? obj[key] = 1 : obj[key]++;
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

