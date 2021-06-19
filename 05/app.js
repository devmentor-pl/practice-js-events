const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const paragrafList = document.querySelectorAll('p');
const linksList = document.querySelectorAll('a');
console.log(linksList);

paragrafList.forEach(function (item) {
    item.addEventListener('click', countClick);
});

linksList.forEach(function (item) {
    item.addEventListener('click', countClickOnLinks);
});

function countClick(e) {
    if (e.target === e.currentTarget) {
        let counter = stats.paragraphs[`${this.getAttribute('data-id')}`];
        if (!stats.paragraphs[`${this.getAttribute('data-id')}`]) {
            counter = 0;
        }
        counter++;
        stats.paragraphs[`${this.getAttribute('data-id')}`] = counter;
    }
}

function countClickOnLinks(e) {
    
        let counterLinks = stats.paragraphs[`${this.getAttribute('href')}`];
        e.preventDefault();
        if (!stats.paragraphs[`${this.getAttribute('href')}`]) {
            counterLinks = 0;
        }
        counterLinks++;
        stats.paragraphs[`${this.getAttribute('href')}`] = counterLinks;
    
}


/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
    // console.log(element, '=>', name);

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