const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElements = document.querySelectorAll('p[data-id]')
const aElements = document.querySelectorAll('a[href]');

const countP = function (e) {
    if (e.target.tagName === 'P') {

        const pId = e.currentTarget.dataset.id;

        if (stats.paragraphs[pId] === undefined) {
            stats.paragraphs[pId] = 0;
        }

        stats.paragraphs[pId]++;
    }
}

const countA = function (e) {

    e.preventDefault();

    if (e.target.tagName === 'A') {

        const aId = e.currentTarget.getAttribute('href');

        if (stats.links[aId] === undefined) {
            stats.links[aId] = 0;
        }

        stats.links[aId]++;
    }

}

pElements.forEach(function (p) {
    p.addEventListener('click', countP);
})

aElements.forEach(function (a) {
    a.addEventListener('click', countA);
})



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