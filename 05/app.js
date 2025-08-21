const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElements = document.querySelectorAll('p')
const count = function (e) {
    const tagName = e.target.tagName
    const link = e.target.getAttribute('href')
    const dataId = e.target.dataset.id
    e.preventDefault()

    if (tagName === "P") {

        if (typeof stats.paragraphs[dataId] === "undefined") {
            stats.paragraphs[dataId] = 0
        }
        else {
            stats.paragraphs[dataId]++
        }
    }
    else if (tagName === "A") {
        if (typeof stats.links[link] === "undefined") {
            stats.links[link] = 0
        }
        else {
            stats.links[link]++
        }
    }

}

pElements.forEach(function (p) {
    p.addEventListener('click', count, true)
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

