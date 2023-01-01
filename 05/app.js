const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const paragraphList = document.querySelectorAll('p');

paragraphList.forEach(function (paragraph) {
    paragraph.addEventListener('click', function (e) {
        const tagName = e.target.tagName;

        if (tagName === 'A') {
            e.preventDefault();
            const link = e.target.getAttribute('href');
            const linkObj = stats.links;
            let counter = 0;

            if (!isNaN(linkObj[link])) {
                linkObj[link] = ++linkObj[link];
            } else {
                linkObj[link] = ++counter;
            }
        } else if (tagName === 'P') {
            const paragraphID = e.target.dataset.id;
            const paragraphObj = stats.paragraphs;
            let counter = 0;

            if (!isNaN(paragraphObj[paragraphID])) {
                paragraphObj[paragraphID] = ++paragraphObj[paragraphID];
            } else {
                paragraphObj[paragraphID] = ++counter;
            }

        }
    })
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

