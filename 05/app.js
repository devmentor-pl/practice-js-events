const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const listOfParagraphs = document.querySelectorAll('p');

document.addEventListener('DOMContentLoaded', function () {

    listOfParagraphs.forEach(function (paragraph) {

        paragraph.addEventListener('click', function (e) {

            e.preventDefault();

            if (e.target === paragraph) {
                isNaN(stats.paragraphs[paragraph.dataset.id]) ? stats.paragraphs[paragraph.dataset.id] = 1 : stats.paragraphs[paragraph.dataset.id] += 1;
            }
            else {
                isNaN(stats.links[e.target.getAttribute('href')]) ? stats.links[e.target.getAttribute('href')] = 1 : stats.links[e.target.getAttribute('href')] += 1;
            }
        });
    });
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) { //tworzy i wykonuje dowolny nowy event zależny od parametrów
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

