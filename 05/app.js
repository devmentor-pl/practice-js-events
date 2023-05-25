const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const links = document.querySelectorAll('.link[href]')
const paragraphs = document.querySelectorAll('p')

const count = function (key, elements) {
    const keys = Object.keys(stats[elements])

    if (keys.includes(key)) {
        stats[elements][key]++
    } else {
        stats[elements][key] = 1
    }
}

links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const href = link.getAttribute('href')

        count(href, 'links')
    })
})

paragraphs.forEach(function (p) {
    p.addEventListener('click', function (e) {
        const id = p.dataset.id

        count(id, 'paragraphs')
    })
})


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

