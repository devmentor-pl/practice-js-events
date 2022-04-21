const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

// /*First solution */

// const allParagraphs = document.querySelectorAll('p.text')

// const clickCounter = function (e) {
//     e.preventDefault()

//     if (this.getAttribute('data-id') === "p1") {
//         stats.paragraphs['p1'] += 1
//     }

//     if (e.target.tagName === "A" && e.target.getAttribute('href') === '/dolor.html') {
//         stats.links['/dolor.html'] += 1
//     }
// }

// allParagraphs.forEach(paragraph => paragraph.addEventListener('click', clickCounter))

// /*End of First solution */


/*Second solution */

let countClick = function () {

    const allParagraphs = document.querySelectorAll('p')
    const allLinks = document.querySelectorAll('a.link')

    allParagraphs.forEach(paragraph => paragraph.addEventListener('click', function (e) {

        if (this.getAttribute('data-id') === "p1") {
            stats.paragraphs['p1'] += 1
        }

    }))

    allLinks.forEach(link => link.addEventListener('click', function (e) {
        e.preventDefault()

        if (this.tagName === "A" && e.target.getAttribute('href') === '/dolor.html') {
            stats.links['/dolor.html'] += 1
        }

    }))

}

/*End of Second solution */


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

