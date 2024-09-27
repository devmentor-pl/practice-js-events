const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const links = document.querySelectorAll('.link')
const stopHref = function (e) {
    e.preventDefault()
}
if (links) {
    links.forEach(function (item) {
        item.addEventListener('click', stopHref)
    })
}

const clickCounter = function (e) {
    const p = document.querySelectorAll('p')
    const a = document.querySelectorAll('a')
    const clickTarget = e.target
    let dolorCounter = stats.links["/dolor.html"]
    let p1Counter = stats.paragraphs.p1
    if (a) {
        a.forEach(function (item) {
            if (item.hasAttribute('href')) {
                if (item.getAttribute('href') === `/dolor.html`) {
                    const hrefDolor = item
                    if (clickTarget === hrefDolor) {
                        dolorCounter = dolorCounter + 1
                        stats.links["/dolor.html"] = dolorCounter
                        return dolorCounter
                    }
                }
            }
        })
    }
    if (p) {
        p.forEach(function (item) {
            if (item.hasAttribute('data-id')) {
                if (item.getAttribute('data-id') === `p1`) {
                    const p1 = item
                    if (clickTarget === p1) {
                        p1Counter = p1Counter + 1
                        stats.paragraphs.p1 = p1Counter
                        return p1Counter
                    }
                }
            }
        })
    }

}


document.addEventListener('click', clickCounter)

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

