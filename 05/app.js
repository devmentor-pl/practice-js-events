const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const pElements = document.querySelectorAll('.text');
const { paragraphs, links } = stats;
const countClick = function (e) {
    e.preventDefault();
    let id = this.dataset.id;
    let href = e.target.pathname;
    typeof paragraphs[id] === 'undefined' ? paragraphs[id] = 1 : paragraphs[id]++;
    if (e.target.classList.contains('link')) {
        typeof links[href] === 'undefined' ? links[href] = 1 : links[href]++;
    };
};

pElements.forEach(function (el) {
    el.addEventListener('click', countClick);
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

